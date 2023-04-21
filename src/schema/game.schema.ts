import { z } from "zod";
import { createSetSchema } from "./set.schema";

export const createGameSchema = z.object({
  body: z.object({
    exercise: z.string({ required_error: "Exercise is required" }),
    sets: z.array(createSetSchema.shape.body),
    duration: z.number().optional(),
    workout: z.string({ required_error: "Workout is required" }),
  }),
});

export type CreateGameInput = z.TypeOf<typeof createGameSchema>;
