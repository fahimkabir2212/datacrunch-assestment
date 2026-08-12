import dotenv from "dotenv";

dotenv.config();

function port(value: string | undefined, fallback: number): number {
  const parsed = Number(value);
  return Number.isInteger(parsed) && parsed > 0 ? parsed : fallback;
}

/**
 * Environment read and validated once, at startup, so nothing downstream
 * touches process.env or has to cope with a malformed value.
 */
export const env = {
  port: port(process.env.PORT, 5000),
  nodeEnv: process.env.NODE_ENV ?? "development",
  get isProduction(): boolean {
    return this.nodeEnv === "production";
  },
  /**
   * Origins allowed to call the API. Comma-separated; defaults to the Vite dev
   * server. Set to "*" to allow any origin.
   */
  corsOrigins: (process.env.CORS_ORIGINS ?? "http://localhost:5173")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean),
} as const;
