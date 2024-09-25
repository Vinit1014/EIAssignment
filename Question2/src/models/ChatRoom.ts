import { Observer, Subject } from '../utils/Observer';

export class ChatRoom implements Subject {
  private observers: Observer[] = [];
  private messages: string[] = [];
  private roomId: string;

  // Add a constructor that accepts roomId
  constructor(roomId: string) {
    this.roomId = roomId;
  }

  // Add an observer (i.e., a user joining the room)
  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  // Remove an observer (i.e., a user leaving the room)
  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  // Notify all observers about a new message
  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }

  // Add a message and notify all observers
  addMessage(message: string): void {
    this.messages.push(message);
    this.notifyObservers(message);
  }

  // Optionally get all messages in the chat room
  getMessages(): string[] {
    return this.messages;
  }

  // Optionally get the room ID
  getRoomId(): string {
    return this.roomId;
  }
}
