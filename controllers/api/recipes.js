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
        console.log(completionText, 'recipe text in CREATERECIPE Controller');
        const newRecipe = await Recipe.create({ingredients: ingredients, user: req.body.user, instructions: completionText})
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
  