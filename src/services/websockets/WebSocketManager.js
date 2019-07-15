import Sockette from 'sockette';

// const awsWS = new Sockette(
//                             "wss://APP_CLIENT_ID.execute-api.ap-southeast-2.amazonaws.com/dev?token=" +
//                             props.authData.signInUserSession.accessToken.jwtToken,
//                             {
//                             timeout: 5e3,
//                             maxAttempts: 1,
//                             onopen: e => console.log("connected:", e),
//                             onmessage: e => console.log("Message Received:", e),
//                             onreconnect: e => console.log("Reconnecting...", e),
//                             onmaximum: e => console.log("Stop Attempting!", e),
//                             onclose: e => console.log("Closed!", e),
//                             onerror: e => console.log("Error:", e)
//                             }
//                         );

const ws = new WebSocket('ws://127.0.0.1:3000');

export function openChatWebSocketConnection(){
    return ws; 
}