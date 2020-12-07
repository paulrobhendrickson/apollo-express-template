import express, { Request, Response } from "express";
import logger from "morgan";
import dotenv from "dotenv";

export const app = express();

dotenv.config();

// Get port from environment and store in Express.
export const port = process.env.PORT || "4000";
app.set("port", port);

//user a loger if in dev
app.use(logger("dev"));
app.use(express.json());

//when at root directory redirect to /graphql
app.get("/", (_req: Request, res: Response) => {
  res.redirect(301, "/graphql");
});

//when posts sent to root directory redirect to /graphql
app.post("/", (_req: Request, res: Response) => {
  res.redirect(308, "/graphql");
});

//This is just used for health checker
app.get("/test", (_req: Request, res: Response) => {
  res.send("Ok");
});
