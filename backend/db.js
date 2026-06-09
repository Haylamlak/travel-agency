const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

// Test connection when server starts
db.query("SELECT NOW()")
  .then(() => console.log("✅ Supabase Connected"))
  .catch((err) => console.log("❌ DB Error:", err));

module.exports = db;