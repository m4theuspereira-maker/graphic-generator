export interface IServer {
  instance: any;
  start(port: number, host: string): void;
  handle(route: string, callback: (param: any) => void): void;
}
