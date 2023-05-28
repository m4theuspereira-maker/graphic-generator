import { resolve } from "path";
import { config } from "dotenv";

config({ path: resolve(__dirname, "../../.env") });

export const PORT = process.env.PORT || 3000;
export const HOST = String(process.env.HOST) || "127.0.0.1";
export const EVENTS = {
  LISTENING: "listening",
  CONNECTION: "connection",
  MESSAGE: "message",
  CLOSE: "close"
};
