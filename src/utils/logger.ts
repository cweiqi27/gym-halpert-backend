import pino from "pino";
import { formatISO } from "date-fns";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      timestampKey: "time",
    },
  },
});

export default logger;
