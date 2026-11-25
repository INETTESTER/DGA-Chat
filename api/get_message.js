
import http from 'k6/http';
import { domain, token } from './env.js';

export function get_message() {
  const url = `${domain}/backend/api/v2/chat/19786385-31a2-45fc-ab9b-bc24c3e2ded2/get-message`;

  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const response = http.get(url, { headers });

  //console.log(response.body);

  return response;
}
