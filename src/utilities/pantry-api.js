import pantry from '../../models/pantry';
import sendRequest from './send-request';
const BASE_URL = '/api/pantry';

export function createPantry() {
    return sendRequest(BASE_URL, 'POST')
}

export function showPantry() {
    return sendRequest(`${BASE_URL}/showPantry`)
}

export function editPantry() {
    return sendRequest(`${BASE_URL}/editPantry`, 'POST')
}

export function deletePantry() {
    return sendRequest(`${BASE_URL}/deletePantry`, 'DELETE', pantry)
}