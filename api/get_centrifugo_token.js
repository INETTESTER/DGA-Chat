
import http from 'k6/http';
import { domain, token } from './env.js';

export function get_centrifugo_token() {
  const url = `${domain}/backend/api/v1/auth/get-centrifugo-token`;

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const response = http.get(url, { headers });

  //console.log(response.body);

  return response;
}
