import { ChatService } from '../services/ChatService';

export class WebSocketAdapter {
    constructor(private socket: any, private chatService: ChatService) {}

    public handleMessages(): void {
        this.socket.on('message', (data: { roomId: string, user: string, message: string }) => {
        const room = this.chatService.getRoom(data.roomId);
        if (room) {
            room.addMessage(`${data.user}: ${data.message}`);
            this.socket.emit('newMessage', room.getMessages());
        }
        });
    }
}
