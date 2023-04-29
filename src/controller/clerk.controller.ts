import type { Request, Response } from "express";
import { Webhook } from "svix";
import { env } from "../schema/env.schema";
import { createUser } from "../service/user.service";
import type {
  IncomingCustomHeaders,
  WebhookMessage,
} from "../types/clerk.types";

export const clerkSyncWebhookHandler = async (req: Request, res: Response) => {
  const payload = JSON.stringify(req.body);
  const headers = req.headers as IncomingCustomHeaders;

  const wh = new Webhook(env.CLERK_SYNC_WEBHOOK_SIGNING_SECRET);

  let msg;
  try {
    msg = wh.verify(payload, headers) as WebhookMessage;
    console.log(typeof msg);
  } catch (e) {
    res.status(400).send({ message: "Webhook verification failed" });
  }

  if (msg) {
    const userId = msg.data.id as string;
    if (msg.type === "user.created") {
      const createdAt = msg.data.created_at as number;
      const updatedAt = msg.data.updated_at as number;
      const user = await createUser(userId, createdAt, updatedAt);
      res.json({ message: "User created", user: user });
    }
    // if(msg.type === "user.updated") {
    //   const user = await
    // }
  }
};
