const Recipe = require('../../models/recipe')
const User = require('../../models/user')

// code to access openai
const openai = require('../../config/gpt');
const Pantry = require('../../models/pantry');

module.exports = {
    createRecipe,
    index,
    deleteRecipe,
    findSpecificRecipe,
    addNote,
    removeNote
}

async function index(req,res) {
    console.log(req.user, 'req.user in INDEX')
    const userId = req.user._id;
    const recipes = await Recipe.find({user: userId});
    res.json(recipes)
}

async function findSpecificRecipe(req,res) {
    // console.log(req.params, 'req.body in SPECIFIC RECIPE CONTROLLER')
    // console.log(req, 'req in SPECIFIC RECIPE CONTROLLER')
    const recipe = await Recipe.findById(req.params.id)
    // console.log(recipe, 'recipe in CONTROLLER')
    res.json(recipe)
}

async function deleteRecipe(req,res) {
    try {
        const recipe = await Recipe.findByIdAndDelete(req.body._id);
        res.json({success: true, recipe})

    } catch (err) {
        res.status(400).json(err)
    }
}

async function addNote(req, res) {
    console.log(req.params, 'req in addNote')
    console.log(req.body, 'body in addNote')
    try{
        const id = req.params.id;
        const note = req.body.noteList.notes;
        const grabRecipe = await Recipe.findByIdAndUpdate(
            id, 
            { $push: {notes : note}}, 
            {new: true});
        res.json(grabRecipe)
    } catch(err) {
        console.log(err,'error for addNOte')
        res.status(400).json(err)
    }
}

async function removeNote(req, res) {
    try {
        const id = req.params.id;
        const recipe = await Recipe.findById(id);
        const index = req.body.index;
        const notes = recipe.notes;
        notes.splice(index,1);
        const result = await recipe.save();
        res.json(result);
    } catch (err) {
        console.log(err,'error for addNOte')
        res.status(400).json(err)
    }
}

async function createRecipe(req, res) {
    console.log(req.user, 'REQ IN CREATERECIPE')
    // console.log(req.body.user, 'req.body.USER in CREATE RECIPE CONTROLLER')
    try{
        const userId = req.user._id
        console.log(userId, 'USER VARIABLE ')
        console.log(typeof userId, 'TYPEOF for User')
        const foundUser = await User.findById(userId);
        console.log(foundUser, 'foundUser VARIABLE')
        // maybe .ingredients or .pantry.ingredients
        const ingredients = req.body.ingredients
        // console.log(ingredients, 'ingredients in CREATE CONTROLLER')
        const prompt = `Give me a recipe using ${ingredients}`
        const params = {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens:250,
            temperature: 0.75,
            n:1
        };
        const response = await openai.createCompletion(params);
        // console.log(response, 'response in createRecipe')

        const completionText = response.data.choices[0].text;
        // console.log(completionText, 'completionText in CREATERECIPE Controller');

        const recipeNameRegex = /^([A-Za-z\s]+)(?=\nIngredients:)/m;
        // const recipeNameMatch = completionText.match(recipeNameRegex);
        const recipeNameMatch = completionText.match(recipeNameRegex);
        // console.log(recipeNameMatch, 'recipeNameMatch in CONTROLLER')
        const recipeName = recipeNameMatch ? recipeNameMatch[1].trim() : '';
        // console.log(recipeName, 'recipeName in CONTROLLER')

        // const ingredientsRegex = /^Ingredients:(.*)(?=Instructions:)/s
        const ingredientsRegex = /^Ingredients:\s*(.*)(?=Instructions:)/ms;

        // const ingredientsRegex = /^Ingredients:(.*)/s

        const ingredientsMatch = completionText.match(ingredientsRegex);
        // console.log(ingredientsMatch, 'ingredientsMatch in CONTROLLER')
        const recipeIngredients = ingredientsMatch ? ingredientsMatch[1].trim() : '';
        // console.log(recipeIngredients, 'recipeIngredients in CONTROLLER')

        // const instructionsRegex = /^Instructions:(.*)$/s
        const instructionsRegex = /^Instructions:\s*(.*)$/ms;

        const instructionsMatch = completionText.match(instructionsRegex)
        // console.log(instructionsMatch, 'instructionsMatch in CONTROLLER')
        const instructions = instructionsMatch ? instructionsMatch[1].trim() : '';
        // console.log(instructions, 'instructions in CONTROLLER')

        const newRecipe = await Recipe.create({
            ingredients: ingredients, 
            user: userId,
            recipeName: recipeName,
            recipeIngredients:recipeIngredients, 
            recipeInstructions: instructions,
        })

        // console.log(newRecipe, 'newRecipe in RECIPECreation Controller')
        res.json(newRecipe)

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message, stack: error.stack });
    }
    
}


  