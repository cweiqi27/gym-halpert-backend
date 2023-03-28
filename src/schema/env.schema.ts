import z from "zod";
import dotenv from "dotenv";

dotenv.config();

const serverSchema = z
  .object({
    DATABASE_URI: z.string().url(),
    PORT: z.string(),
    SALT_ROUNDS: z.string(),
  })
  .safeParse(process.env);

if (!serverSchema.success) {
  console.error(
    "❌ Invalid environment variables:\n",
    Object.entries(serverSchema.error.format())
      .map(([name, value]) => {
        if (value && "_errors" in value)
          return `${name}: ${value._errors.join(", ")}\n`;
      })
      .filter(Boolean)
  );
  throw new Error("Invalid environment variables");
}

export const env = { ...serverSchema.data };
