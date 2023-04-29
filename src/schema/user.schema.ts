import z from "zod";

export const createUserSchema = z.object({
  body: z.object({
    userId: z.string({required_error: "User Id is required"})
  }),
});

export type CreateUserInput = z.TypeOf<typeof createUserSchema>;
