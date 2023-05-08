import sendRequest from './send-request';
const BASE_URL = '/api/pantry';

export function createPantry(pantry) {
    console.log(pantry, 'made it to create pantryAPI')
    return sendRequest(`${BASE_URL}`, 'POST', pantry)
}

export function showPantry() {
    console.log('made it to SHOW pantryAPI')
    return sendRequest(`${BASE_URL}/showPantry`)
}

export function editPantry() {
    return sendRequest(`${BASE_URL}/editPantry`, 'POST')
}

export function deletePantry() {
    return sendRequest(`${BASE_URL}/deletePantry`, 'DELETE', pantry)
}