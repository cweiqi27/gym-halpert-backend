import z from "zod";

export const createExerciseSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Exercise name is required.",
    }),
    description: z.string().nullish(),
    image: z.string().nullish(),
    bodyParts: z.array(z.string()),
    type: z.string({
      required_error: "Exercise type is required.",
    }),
    difficulty: z.number({
      required_error: "Exercise difficulty is required.",
    }),
  }),
});

export type CreateExerciseInput = z.TypeOf<typeof createExerciseSchema>;
