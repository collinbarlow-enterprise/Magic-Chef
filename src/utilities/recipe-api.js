import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

// grabs all recipes
export function index() {
    return sendRequest(BASE_URL)
}

// think ill pass in pantry so that pantry.ingredients can be accessed 
export function createRecipe(pantry) {
    console.log(pantry, 'pantry in createRECIPE API')
    return sendRequest(`${BASE_URL}/recipeCreate`, 'POST', pantry);
  }

export function findRecipe(id) {
    console.log(id, 'recipeId in api function')
    return sendRequest(`${BASE_URL}/findRecipe/${id}`)
}

export function deleteRecipe(recipe) {
    return sendRequest(`${BASE_URL}/deleteRecipe`, 'DELETE', recipe)
}
