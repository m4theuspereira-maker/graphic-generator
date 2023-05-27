import { GraphicGeneratorService } from "../src/services/graphic-generator-service";

describe("GraphicGeneratorService", () => {
  let graphicGenerator: GraphicGeneratorService;

  describe("calculate", () => {
    beforeEach(() => {
      graphicGenerator = new GraphicGeneratorService();
    });

    it("should return 0.18504999999999994 if input was 3000  ", () => {
      const result = graphicGenerator.calculate(3000);

      expect(result).toBe(0.18504999999999994);
    });
  });
});
