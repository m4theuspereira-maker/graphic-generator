import { Server } from "ws";
import { IServer } from "./interfaces/interfaces";
import { EVENTS } from "../common/environment-consts";

export class WSServer implements IServer {
  instance: Server | undefined;

  start(port: number, host: string): void {
    this.instance = new Server({ port, host }).on(EVENTS.LISTENING, () => {
      console.log(`listening on port ${port} 🚀`);
    });
  }

  handle(route: string, callback: (param: any) => void): void {
    this.instance?.on(route, callback);
  }
}
