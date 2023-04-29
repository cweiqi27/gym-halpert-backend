import { z } from "zod";

export const createBodyPartSchema = z.object({
  body: z.object({
    name: z.string({ required_error: "Name is required" }),
    description: z.string().optional(),
    image: z.string().optional(),
  }),
});

export type CreateBodyPartInput = z.infer<typeof createBodyPartSchema>;
