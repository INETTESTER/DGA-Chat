
import http from 'k6/http';
import { domain, token } from './env.js';

const imgPath = open('../file/TEST.txt', 'b');  //ไฟล์ที่จะ upload

export function send_file() {
    const url = `${domain}/backend/api/v2/chat/19786385-31a2-45fc-ab9b-bc24c3e2ded2/send-file`;

    const file = http.file(imgPath);

    const payload = {
        file: file,
    };

    const headers = {
        'Authorization': `Bearer ${token}`,
    };

    const response = http.post(url, payload, { headers });

    //console.log(response.body);

    return response;
}
