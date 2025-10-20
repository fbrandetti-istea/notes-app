import mysql from "mysql2/promise";

async function connectWithRetry() {
  let retries = 10;
  while (retries) {
    try {
      const connection = await mysql.createConnection({
        host: process.env.DB_HOST || "localhost",
        user: process.env.DB_USER || "root",
        password: process.env.DB_PASSWORD || "root",
        database: process.env.DB_NAME || "notesdb",
      });
      console.log("DB connection successful.");
      return connection;
    } catch (err) {
      console.error("DB connection failed, retrying in 3s...", err.message);
      retries -= 1;
      await new Promise((res) => setTimeout(res, 3000));
    }
  }
  throw new Error("Failed to connect to MySQL after several retries.");
}

export const db = await connectWithRetry();
