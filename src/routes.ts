import express, { Router } from "express";
import cors from "cors";
import { graphicGerneratorFactory } from "./common/factories";

const graphControllerFactory = graphicGerneratorFactory();

const routes = Router();
routes.use(cors());
routes.use(express.json());
routes.use(express.urlencoded({ extended: true }));

routes.get("/", (req, res) => res.send("I'm working"));

routes.get("/calculate", graphControllerFactory.generateGraphic);

export { routes };
