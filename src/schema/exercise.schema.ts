import z from "zod";

export const createExerciseSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Exercise name is required.",
    }),
    description: z.string().optional(),
    image: z.string().optional(),
    bodyParts: z.array(z.string()),
    equipment: z.string().optional(),
    difficulty: z.number({
      required_error: "Exercise difficulty is required.",
    }),
  }),
});

export type CreateExerciseInput = z.TypeOf<typeof createExerciseSchema>;
