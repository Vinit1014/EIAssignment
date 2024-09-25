
# Assignment-2 
## 5. Real-Time Chat Application (Console-Based)

This is a simple real-time chat application built using WebSockets. Users can join or create chat rooms, send and receive messages in real-time, and view a list of active users in the chat room. The application focuses on implementing key design patterns (Observer, Singleton, Adapter), follows SOLID principles, and provides a scalable architecture for real-time communication.

## Features

- Join or create chat rooms using a unique room ID.
- Send and receive messages in real-time within a chat room.
- Display a list of active users in the chat room.

## Design Patterns

1. **Observer Pattern:** Each client acts as an observer to receive real-time updates (new messages, user joins/leaves).
2. **Singleton Pattern:** A Singleton service manages the state of chat rooms.
3. **Adapter Pattern:** Allows flexibility for future implementations of different communication protocols (WebSockets, HTTP, etc.).

## Requirements

- Node.js (v14 or higher)
- TypeScript

## Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/real-time-chat-app.git
   cd real-time-chat-app
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the TypeScript project:**
   ```bash
   npm run build
   ```

4. **Start the server:**
   ```bash
   npm run dev
   ```

5. The WebSocket server will be running at `ws://localhost:8080`.

## Usage

You can connect to the WebSocket server using a WebSocket client (e.g., browser developer tools, Postman, or WebSocket King).

### Join a Room
Send the following message to the server:
```json
{
  "action": "join",
  "roomId": "Room123",
  "username": "Alice"
}
```

### Send a Message
```json
{
  "action": "message",
  "roomId": "Room123",
  "username": "Alice",
  "text": "Hello, everyone!"
}
```

### Leave a Room
```json
{
  "action": "leave",
  "roomId": "Room123",
  "username": "Alice"
}
```

### Example WebSocket Client Code

To connect using browser developer tools:

```javascript
const ws = new WebSocket('ws://localhost:8080');

ws.onmessage = (event) => {
    console.log('Message from server:', event.data);
};

ws.onopen = () => {
    ws.send(JSON.stringify({ action: 'join', roomId: 'Room123', username: 'Alice' }));
};

ws.send(JSON.stringify({ action: 'message', roomId: 'Room123', username: 'Alice', text: 'Hello, everyone!' }));

ws.onclose = () => {
    ws.send(JSON.stringify({ action: 'leave', roomId: 'Room123', username: 'Alice' }));
};

## Folder Structure

├── src
│   ├── controllers
│   │   └── ChatController.ts   # Handles chat actions like join, send message, leave
│   ├── models
│   │   └── ChatRoom.ts         # Represents a chat room, implements the Observer pattern
│   ├── services
│   │   └── ChatService.ts      # Manages the state of chat rooms (Singleton pattern)
│   ├── utils
│   │   └── Observer.ts         # Defines the Observer and Subject interfaces
│   └── index.ts                # Entry point, WebSocket server initialization
├── tsconfig.json               # TypeScript configuration
├── package.json                # Project metadata and dependencies
└── README.md                   # Project documentation

## Testing

To test the functionality, you can:

1. **Open multiple WebSocket connections** in different browser tabs or use a WebSocket client like Postman.
2. **Simulate different users** joining, sending messages, and leaving chat rooms.

Ensure the WebSocket server is logging correct messages, and real-time communication is working properly.


## Contact

For any questions or issues, feel free to open an issue or reach out at [vinit10dev@gmail.com].
