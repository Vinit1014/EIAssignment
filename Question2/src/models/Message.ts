export class Message {
    constructor(public user: string, public content: string, public timestamp: Date) {}
  
    public format(): string {
      return `[${this.user}]: ${this.content}`;
    }
}

  