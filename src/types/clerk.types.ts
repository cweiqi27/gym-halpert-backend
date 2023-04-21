import type { IncomingHttpHeaders } from "http";
import type {
  WebhookRequiredHeaders,
  WebhookUnbrandedRequiredHeaders,
} from "svix";

export type IncomingCustomHeaders = IncomingHttpHeaders &
  (
    | WebhookRequiredHeaders
    | WebhookUnbrandedRequiredHeaders
    | Record<string, string>
  );

type ClerkWebhookTypes = {
  type: "user.created" | "user.updated" | "user.deleted";
};

export type WebhookMessage = {
  data: Record<string, unknown>;
  object: string;
} & ClerkWebhookTypes;
