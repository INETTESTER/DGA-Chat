import http from 'k6/http';

export function chat_home() {  // GET
    const url = "https://chat.inet.co.th/authen-login?shared_token=1";

    const response = http.get(url, {
        timeout: '5m'
    });

    //console.log('Response body:', response.body);
    return response;
}