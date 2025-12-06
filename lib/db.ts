import { Pool } from "pg";

export const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "ei_educa_plus",
  password: process.env.DB_PASSWORD,
  port: 5432,
});
