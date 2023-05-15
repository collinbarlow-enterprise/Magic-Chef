import sendRequest from './send-request';
const BASE_URL = '/api/pantry';

export function createPantry(pantry) {
    return sendRequest(`${BASE_URL}`, 'POST', pantry)
}

export function getPantry(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function showPantry() {
    return sendRequest(`${BASE_URL}/showPantry`)
}

export function editPantry(id, newPantry) {
    return sendRequest(`${BASE_URL}/${id}/editPantry`, 'PUT', {newPantry})
}

export function deletePantry(pantry) {
    return sendRequest(`${BASE_URL}/deletePantry`, 'DELETE', pantry)
}