import z from "zod";
import { WorkoutTypeArr } from "../types/typeEnums.types";

export const createWorkoutSchema = z.object({
  body: z.object({
    games: z.array(z.string()).optional(),
    type: z.enum(WorkoutTypeArr),
    duration: z.number().optional(),
    notes: z.string().optional(),
    user: z.string({ required_error: "User is required" }),
  }),
});

export type CreateWorkoutInput = z.TypeOf<typeof createWorkoutSchema>;
