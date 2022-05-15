export enum ServerType {
  server,
  blueprint
}
export class Server {
  constructor(public type:ServerType, public name:string, public content:string) {
    this.type = type;
    this.name = name;
    this.content = content;
  }
}
