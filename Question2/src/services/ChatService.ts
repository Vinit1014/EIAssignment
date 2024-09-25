import { ChatRoom } from '../models/ChatRoom';

export class ChatService {
  private static instance: ChatService;
  private rooms: Map<string, ChatRoom> = new Map();

  // Private constructor to implement Singleton pattern
  private constructor() {}

  // Singleton instance method
  public static getInstance(): ChatService {
    if (!ChatService.instance) {
      ChatService.instance = new ChatService();
    }
    return ChatService.instance;
  }

  // Create or retrieve a chat room by roomId
  createRoom(roomId: string): ChatRoom {
    const room = new ChatRoom(roomId);
    this.rooms.set(roomId, room);
    return room;
  }

  // Retrieve a chat room by roomId
  getRoom(roomId: string): ChatRoom | undefined {
    return this.rooms.get(roomId);
  }
}
