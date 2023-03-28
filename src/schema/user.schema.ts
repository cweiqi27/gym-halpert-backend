import type { TypeOf } from "zod";
import z from "zod";

export const createUserSchema = z.object({
  body: z
    .object({
      name: z.string({
        required_error: "Name is required",
      }),
      email: z
        .string({
          required_error: "Email is required",
        })
        .email("Not a valid email"),
      password: z
        .string({
          required_error: "Password is required",
        })
        .min(7, {
          message: "Password too short - minimum 7 characters",
        }),
      passwordConfirmation: z.string({
        required_error: "Password confirmation is required",
      }),
      image: z.string().nullish(),
    })
    .refine((data) => data.password === data.passwordConfirmation, {
      message: "Passwords do not match",
      path: ["passwordConfirmation"],
    }),
});

export type CreateUserInput = Omit<
  TypeOf<typeof createUserSchema>,
  "body.passwordConfirmation"
>;

// export type CreateUserInput = TypeOf<typeof createUserSchema>;
