import sendRequest from './send-request';
const BASE_URL = '/api/recipes';

// grabs all recipes
export function index() {
    return sendRequest(BASE_URL)
}

export function createRecipe(pantry) {
    console.log(pantry, 'PANTRY IN CREATERECIPE API')
    return sendRequest(`${BASE_URL}/recipeCreate`, 'POST', pantry);
  }

export function findRecipe(id) {
    return sendRequest(`${BASE_URL}/findRecipe/${id}`)
}

export function deleteRecipe(recipe) {
    return sendRequest(`${BASE_URL}/deleteRecipe`, 'DELETE', recipe)
}

export function addNote(id, noteList) {
    return sendRequest(`${BASE_URL}/findRecipe/${id}/note`, 'PUT', {noteList})
}

export function removeNote (index, note, id) {
    return sendRequest(`${BASE_URL}/findRecipe/${id}/removeNote`, 'PUT', {index, note}  )
}