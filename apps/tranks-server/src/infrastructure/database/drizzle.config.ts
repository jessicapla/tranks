import {defineConfig} from "drizzle-kit";
import dotenv from "dotenv";
import process from "node:process";

dotenv.config({path: "./.env"})

export default defineConfig({
  out: "./drizzle",
  schema: "./src/infrastructure/database/schema",
  dialect: "postgresql",
  dbCredentials: {
    url: process.env.DATABASE_URL!,
  }
})