
import ws from 'k6/ws';
import { domain, token } from './env.js';

export function websocket() {
  const url = `wss://chat.inet.co.th/centrifugo/connection/websocket`;

  const params = {
    headers: {
      'Authorization': `Bearer ${token}`,
    },
  };

  const response = ws.connect(url, params, function (socket) {

    socket.on('open', function () {
      //console.log('WebSocket Connected');

      // ส่ง Centrifugo Connect Command
      socket.send(JSON.stringify({
        id: 1,
        connect: {
          token: token,
        },
      }));
    });

    // socket.on('message', function (message) {
    //   console.log(`WebSocket Message: ${message}`);
    // });

    // socket.on('close', function () {
    //   console.log('WebSocket Closed');
    // });

    // socket.on('error', function (e) {
    //   console.error(`WebSocket Error: ${e.error()}`);
    // });

    // socket.setTimeout(function () {
    //   socket.close();
    // }, 10000);
  });

  //console.log(`WebSocket Status: ${response && response.status}`);

  return response;
}
