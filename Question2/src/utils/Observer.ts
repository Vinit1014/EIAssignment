// Rename the imported Observer to ChatObserver to avoid conflict
import { Observer as ChatObserver } from './Observer';

export interface Observer {
  update(message: string): void;
}

export interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(message: string): void;
}

export class ChatRoom implements Subject {
  private observers: ChatObserver[] = [];
  private messages: string[] = [];

  addObserver(observer: ChatObserver): void {
    this.observers.push(observer);
  }

  removeObserver(observer: ChatObserver): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notifyObservers(message: string): void {
    for (const observer of this.observers) {
      observer.update(message);
    }
  }

  addMessage(message: string): void {
    this.messages.push(message);
    this.notifyObservers(message);
  }

  getMessages(): string[] {
    return this.messages;
  }
}
