import { EVENTS } from "../common/environment-consts";

export class GraphicGeneratorService {
  calculate(x: number): number {
    const y =
      -0.06366 +
      0.12613 * Math.cos(Math.PI * (x / 500)) +
      0.12258 * Math.cos(Math.PI * (x / 250)) +
      0.01593 * Math.sin(Math.PI * (x / 500)) +
      0.03147 * Math.sin(Math.PI * (x / 250));

    return y;
  }

  gerateResult(socket: any, callbackEvent: string) {
    console.log("New client connected! ✅");

    socket.on(callbackEvent, (message: any) => {
      try {
        if (
          String(message).toLocaleLowerCase().trim() !== EVENTS.CLOSE &&
          typeof JSON.parse(message) !== "number"
        ) {
          socket.send("INCORRECT_TYPE: send a number in message body");
          return;
        }

        let incremmentMessage = message;

        const interval = setInterval(() => {
          if (
            String(incremmentMessage).toLocaleLowerCase().trim() == EVENTS.CLOSE
          ) {
            socket.send("Connection closed! ❌");
            socket.close();
            clearInterval(interval);
          }

          const result = {
            x: String(incremmentMessage),
            y: String(this.calculate(incremmentMessage))
          };

          incremmentMessage = Number(incremmentMessage) + 100;

          socket.send(JSON.stringify(result));
        }, 3000);
      } catch (error) {
        socket.send("INCORRECT_TYPE: send a number in message body");
      }
    });
  }
}
