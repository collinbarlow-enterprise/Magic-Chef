import sendRequest from './send-request';
const BASE_URL = '/api/pantry';

export function createPantry(pantry) {
    // console.log(pantry, 'made it to create pantryAPI')
    return sendRequest(`${BASE_URL}`, 'POST', pantry)
}

export function getPantry(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function showPantry() {
    // console.log('made it to SHOW pantryAPI')
    return sendRequest(`${BASE_URL}/showPantry`)
}

export function editPantry(id, newPantry) {
    // console.log(newPantry, 'newPantry in API')
    console.log(id, 'ID in API')
    return sendRequest(`${BASE_URL}/${id}/editPantry`, 'PUT', {newPantry})
}

export function deletePantry(pantry) {
    // console.log(pantry, 'made it to DELETE API')
    return sendRequest(`${BASE_URL}/deletePantry`, 'DELETE', pantry)
}