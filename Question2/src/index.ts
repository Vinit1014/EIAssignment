import WebSocket, { WebSocketServer } from 'ws';
import { ChatController } from './controllers/ChatController';
import { Observer } from './utils/Observer';

// Initialize WebSocket server
const wss: WebSocketServer = new WebSocket.Server({ port: 8080 });
const chatController = new ChatController();

console.log("WebSocket server is running on ws://localhost:8080");

wss.on('connection', (ws: WebSocket) => {
    console.log('New client connected');

    // Observer for the client (each client acts as an observer)
    const clientObserver: Observer = {
        update: (message: string) => {
        ws.send(message);
        }
    };

    ws.on('message', (data: WebSocket.RawData) => {
        try {
        const { action, roomId, username, text } = JSON.parse(data.toString());

        if (action === 'join') {
            chatController.joinRoom(roomId, username, clientObserver);
        } else if (action === 'message') {
            chatController.sendMessage(roomId, username, text);
        } else if (action === 'leave') {
            chatController.leaveRoom(roomId, username, clientObserver);
        }
        } catch (error) {
        console.error("Invalid message format", error);
        }
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
});
