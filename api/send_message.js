
import http from 'k6/http';
import { domain, token } from './env.js';

export function send_message() {
  const url = `${domain}/backend/api/v2/chat/19786385-31a2-45fc-ab9b-bc24c3e2ded2/send-message`;

  const payload = JSON.stringify({
    message: 'สวัสดีชาวโลก',
    message_id_client: 'Tsn2ml2bpV',
  });

  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`,
  };

  const response = http.post(url, payload, {
    headers: headers,
    timeout: '3m',
  });

  //console.log(response.body);

  return response;
}
