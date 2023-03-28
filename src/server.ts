import express from "express";
import { connectDB } from "./db/connect";
import routes from "./routes";
import { env } from "./schema/env.schema.js";
import logger from "./utils/logger";

const app = express();
const port = env.PORT;

app.use(express.json());

app.listen(port, async () => {
  logger.info(`⚡️[server]: Server is running at http://localhost:${port}`);
  await connectDB();

  routes(app);
});
