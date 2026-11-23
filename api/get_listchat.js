
import http from 'k6/http';
import { domain, token } from './env.js';

export function get_listchat() {
  const url = `${domain}/backend/api/v2/listchat/get-listchat?unread_first=false&filter=all&offset=0&query=&in_room=true&lang=th`;

  const headers = {
    'Authorization': `Bearer ${token}`,
  };

  const response = http.get(url, { headers });

  //console.log(response.body);

  return response;
}
