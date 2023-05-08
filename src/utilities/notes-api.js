import sendRequest from './send-request';
const BASE_URL = '/api/notes';

export function getAll() {
    // console.log('api getall');
    return sendRequest(`${BASE_URL}`);
  }
//   export function getById(id) {
//     return sendRequest(`${BASE_URL}/${id}`);
//   }