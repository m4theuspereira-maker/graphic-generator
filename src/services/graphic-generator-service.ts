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

    socket.on(callbackEvent, (message: number) => {
      let incremmentMessage = Number(message);

      setInterval(() => {
        this.calculate(incremmentMessage);

        const result = {
          x: String(incremmentMessage),
          y: String(this.calculate(incremmentMessage))
        };

        incremmentMessage = incremmentMessage + 100;

        socket.send(JSON.stringify(result));
      }, 3000);
    });
  }
}
