import { WSServer } from "../src/services/ws-server";
import ws from "ws";
describe("WSServer", () => {
  let wsServer: WSServer;

  describe("start", () => {
    beforeEach(() => {
      wsServer = new WSServer();
    });

    it("should call instance of WSS with correct params", () => {
      const serverSpy = jest
        .spyOn(ws, "Server")
        .mockReturnValueOnce(null as never);

      wsServer.start(3000, "000000");

      expect(serverSpy).toHaveBeenCalledWith({
        port: expect.any(Number),
        host: expect.any(String)
      });
    });
  });
});
