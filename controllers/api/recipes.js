const Recipe = require('../../models/recipe')

// code to access openai
const openai = require('../../config/gpt');
const pantry = require('../../models/pantry');

module.exports = {
    createRecipe,

}

async function createRecipe(req, res) {
    console.log(req.body, 'req.body in CREATE RECIPE CONTROLLER')
    try{
        // maybe .ingredients or .pantry.ingredients
        const ingredients = req.body.ingredients
        console.log(ingredients, 'ingredients in CREATE CONTROLLER')
        const prompt = `Give me a recipe using ${ingredients}`
        const params = {
            model: 'text-davinci-003',
            prompt: prompt,
            max_tokens:250,
            temperature: 0.75,
            n:1
        };
        const response = await openai.createCompletion(params);
        console.log(response, 'response in createRecipe')

        const completionText = response.data.choices[0].text;
        console.log(completionText, 'completionText in CREATERECIPE Controller');

        const recipeNameRegex = /^([A-Za-z\s]+)(?=\nIngredients:)/;
        // const recipeNameMatch = completionText.match(recipeNameRegex);
        const recipeNameMatch = completionText.match(recipeNameRegex);
        console.log(recipeNameMatch, 'recipeNameMatch in CONTROLLER')
        const recipeName = recipeNameMatch ? recipeNameMatch[0].trim() : '';
        console.log(recipeName, 'recipeName in CONTROLLER')

        // const ingredientsRegex = /^Ingredients:(.*)(?=Instructions:)/s
        const ingredientsRegex = /^Ingredients:\s*(.*)(?=Instructions:)/s

        // const ingredientsRegex = /^Ingredients:(.*)/s

        const ingredientsMatch = completionText.match(ingredientsRegex);
        console.log(ingredientsMatch, 'ingredientsMatch in CONTROLLER')
        const recipeIngredients = ingredientsMatch ? ingredientsMatch[1].trim() : '';
        console.log(recipeIngredients, 'recipeIngredients in CONTROLLER')

        // const instructionsRegex = /^Instructions:(.*)$/s
        const instructionsRegex = /^Instructions:\s*(.*)$/s

        const instructionsMatch = completionText.match(instructionsRegex)
        console.log(instructionsMatch, 'instructionsMatch in CONTROLLER')
        const instructions = instructionsMatch ? instructionsMatch[1].trim() : '';
        console.log(instructions, 'instructions in CONTROLLER')

        const newRecipe = await Recipe.create({
            ingredients: ingredients, 
            user: req.body.user,
            recipeName: recipeName,
            recipeIngredients:recipeIngredients, 
            recipeInstructions: instructions,
        })

        console.log(newRecipe, 'newRecipe in RECIPECreation Controller')

    } catch (error) {
        console.error(error);
        res.status(400).json({ message: error.message, stack: error.stack });
    }
    
}




async function generateText(prompt) {
    const gptResponse = await openai.completions.create({
      engine: 'davinci',
      prompt,
      maxTokens: 2048,
      n: 1,
      stop: '\n',
    });
    const { choices } = gptResponse.data;
    return choices[0].text.trim();
  }
  