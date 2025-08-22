import z from "zod";
import dotenv from "dotenv";

dotenv.config();

const envSchema = z.object({
  DATABASE_PATH: z.string(),
});

export const env = envSchema.parse(process.env);
