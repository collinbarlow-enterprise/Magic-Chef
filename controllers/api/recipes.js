const Recipe = require('../../models/recipe')
const User = require('../../models/user')

// code to access openai
const openai = require('../../config/gpt');

module.exports = {
    createRecipe,
    index,
    deleteRecipe,
    findSpecificRecipe,
    addNote,
    removeNote
}

async function index(req, res) {
    const userId = req.user._id;
    const recipes = await Recipe.find({ user: userId });
    res.json(recipes)
}

async function findSpecificRecipe(req, res) {
    const recipe = await Recipe.findById(req.params.id);
    res.json(recipe)
}

async function deleteRecipe(req, res) {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.body._id);
        res.json({ success: true, recipe })

    } catch (err) {
        res.status(400).json(err)
    }
}

async function addNote(req, res) {
    try {
        const id = req.params.id;
        const note = req.body.noteList.notes;
        const grabRecipe = await Recipe.findByIdAndUpdate(
            id,
            { $push: { notes: note } },
            { new: true });
        res.json(grabRecipe);
    } catch (err) {
        res.status(400).json(err)
    }
}

async function removeNote(req, res) {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id);
        const index = req.body.index;
        const notes = recipe.notes;
        notes.splice(index, 1);
        const result = await recipe.save();
        res.json(result);
    } catch (err) {
        res.status(400).json(err)
    }
}

async function createRecipe(req, res) {
    try {
        const userId = req.user._id;
        const ingredients = req.body.ingredients;

        // Constructing the prompt message for a single input
        const prompt = `Please give me a recipe using the following ingredients: ${ingredients.join(', ')}.`;

        // Constructing the user message
        const userMessage = `Please give me a recipe using the following ingredients: ${ingredients.join(', ')}.`;

        const params = {
            model: 'gpt-3.5-turbo',
            messages: [
                {
                    "role": "system",
                    "content": "You will be provided with a list of ingredients, and your task is to generate a recipe using these ingredients."
                },
                {
                    "role": "user",
                    "content": userMessage
                }
            ],
            max_tokens: 250,
            temperature: 0.75,
            n: 1
        };


        const response = await openai.chat.completions.create(params);
        const completionText = response.choices[0].message.content;

        const recipeNameRegex = /^Recipe:\s*(.+)$/m;
        const recipeNameMatch = completionText.match(recipeNameRegex);
        const recipeName = recipeNameMatch ? recipeNameMatch[1].trim() : '';
        console.log(recipeName, 'RECIPENAME IN CONTROLLER');


        const ingredientsRegex = /^Ingredients:\s*(.*)(?=Instructions:)/ms;
        const ingredientsMatch = completionText.match(ingredientsRegex);
        const recipeIngredients = ingredientsMatch ? ingredientsMatch[1].trim() : '';

        const instructionsRegex = /^Instructions:\s*(.*)$/ms;
        const instructionsMatch = completionText.match(instructionsRegex);
        const instructions = instructionsMatch ? instructionsMatch[1].trim() : '';

        const newRecipe = await Recipe.create({
            ingredients: ingredients,
            user: userId,
            recipeName: recipeName,
            recipeIngredients: recipeIngredients,
            recipeInstructions: instructions,
        });
        res.json(newRecipe);
    } catch (error) {
        console.log('Error during API request:', error);
        res.status(400).json({ message: error.message, stack: error.stack });
    }
}




