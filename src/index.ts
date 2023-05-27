import { EVENTS, HOST, PORT } from "./common/environment-consts";
import { WSServer } from "./services/ws-server";
import { GraphicGeneratorService } from "./services/graphic-generator-service";

const server = new WSServer();

server.start(Number(PORT), HOST);
server.handle(EVENTS.CONNECTION, (ws) => {
  new GraphicGeneratorService(ws).gerateResult(EVENTS.MESSAGE);
});
