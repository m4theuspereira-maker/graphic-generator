import { Server } from "ws";
import { IServer } from "./interfaces/interfaces";

export class WSServer implements IServer {
  instance: Server | undefined;

  start(port: number, host: string): void {
    this.instance = new Server({ port, host });
  }

  handle(route: string, callback: (param: any) => void): void {
    this.instance?.on(route, callback);
  }
}
