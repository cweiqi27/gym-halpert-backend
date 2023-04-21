import express from "express";
import { connectDb } from "./utils/connect";
import routes from "./routes/app";
import { env } from "./schema/env.schema";
import logger from "./utils/logger";

const app = express();
const port = env.PORT ?? 3000;

app.use(express.json());

app.listen(port, async () => {
  logger.info(`[server]: Server is running at http://localhost:${port}`);
  await connectDb();

  routes(app);
});
