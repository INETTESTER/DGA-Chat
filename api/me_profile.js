
import http from 'k6/http';
import { domain, token } from './env.js';

export function me_profile() {
  const url = `${domain}/backend/api/v1/account/me/profile`;

  const headers = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': `Bearer ${token}`,
  };

  const response = http.get(url, { headers });

  //console.log(response.body);

  return response;
}
