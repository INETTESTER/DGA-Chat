
import http from 'k6/http';
import { domain, token } from './env.js';

export function get_unread_chat() {
  const url = `${domain}/backend/api/v1/listchat/get-unread-chat`;

  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const response = http.get(url, { headers });

  //console.log(response.body);

  return response;
}
