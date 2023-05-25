import { GraphicGeneratorController } from "../controller/graphic-generator-controller";
import { GraphicGeneratorService } from "../service/graphic-generator-service";

export const graphicGerneratorFactory = () => {
  return new GraphicGeneratorController(new GraphicGeneratorService());
};
