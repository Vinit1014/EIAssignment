import { ChatRoom } from '../models/ChatRoom';
import { ChatService } from '../services/ChatService';
import { Observer } from '../utils/Observer';

export class ChatController {
    private chatService: ChatService;

    constructor() {
    this.chatService = ChatService.getInstance();
    }

    joinRoom(roomId: string, username: string, observer: Observer): ChatRoom | undefined {
        let room = this.chatService.getRoom(roomId);
        if (!room) {
        room = this.chatService.createRoom(roomId);
        }

        room.addObserver(observer); // User listens for new messages
        room.addMessage(`${username} joined the room.`);
        return room;
    }

    sendMessage(roomId: string, username: string, message: string): void {
        const room = this.chatService.getRoom(roomId);
        if (room) {
        room.addMessage(`${username}: ${message}`);
        } else {
        console.error(`Room with ID ${roomId} does not exist.`);
        }
    }

    leaveRoom(roomId: string, username: string, observer: Observer): void {
        const room = this.chatService.getRoom(roomId);
        if (room) {
        room.removeObserver(observer);
        room.addMessage(`${username} left the room.`);
        }
    }
}
