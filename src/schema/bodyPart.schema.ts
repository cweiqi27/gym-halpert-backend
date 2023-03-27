import z from "zod";

export const createExerciseSchema = z.object({
  name: z.string({
    required_error: "Exercise name is required.",
  }),
  description: z.string().nullish(),
});
