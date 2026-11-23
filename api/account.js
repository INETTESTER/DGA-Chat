
import http from 'k6/http';
import { domain, token } from './env.js';

export function account() {
  const url = `${domain}/backend/api/v1/file/profile/account/cfe8da5b-9c38-47ef-bf93-c953fc003e42`;

  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`,
  };

  const response = http.get(url, { headers });

  //console.log(response.body);

  return response;
}
