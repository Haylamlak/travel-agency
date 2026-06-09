const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
  family: 4,
});

// FORCE REAL TEST QUERY (THIS IS IMPORTANT)
(async () => {
  try {
    const res = await db.query("SELECT NOW()");
    console.log("✅ Database connected successfully:", res.rows[0]);
  } catch (err) {
    console.log("❌ DB connection error:", err.message);
  }
})();

module.exports = db;