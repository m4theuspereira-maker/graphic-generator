import { Request, Response } from "express";
import { GraphicGeneratorService } from "../service/graphic-generator-service";

export class GraphicGeneratorController {
  constructor(
    private readonly graphicGeneratorService: GraphicGeneratorService
  ) {}

  generateGraphic = (req: Request, res: Response) => {
    const result = this.graphicGeneratorService.calculate(1000);

    return res.json(result).status(200);
  };
}
