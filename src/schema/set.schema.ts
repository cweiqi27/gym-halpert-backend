import { z } from "zod";
import { SetTypeArr } from "../types/typeEnums.types";

export const createSetSchema = z.object({
  body: z.object({
    type: z.enum(SetTypeArr),
    weight: z.number().optional(),
    reps: z.number().optional(),
  }),
});

export type CreateSetInput = z.TypeOf<typeof createSetSchema>;
