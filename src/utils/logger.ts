import pino from "pino";

const logger = pino({
  transport: {
    target: "pino-pretty",
    options: {
      colorize: true,
      translateTime: "SYS:d/m/yy h:MM TT",
      ignore: "pid,hostname",
    },
  },
});

export default logger;
