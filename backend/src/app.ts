import express, { type Express } from "express";
import cors from "cors";
import { apiRoutes } from "./routes/index.js";
import { notFound } from "./middleware/notFound.js";
import { errorHandler } from "./middleware/errorHandler.js";
import { env } from "./config/env.js";

export function createApp(): Express {
  const app = express();

  app.use(
    cors({
      origin: env.corsOrigins.includes("*") ? true : env.corsOrigins,
    }),
  );
  app.use(express.json());

  app.use("/api", apiRoutes);

  app.use(notFound);
  app.use(errorHandler);

  return app;
}
