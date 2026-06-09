const { Pool } = require("pg");
require("dotenv").config();

const db = new Pool({
  connectionString: process.env.DATABASE_URL,

  // IMPORTANT FIX FOR SUPABASE POOLER
  ssl: {
    rejectUnauthorized: false,
  },

  // FORCE IPv4 (VERY IMPORTANT FOR RENDER)
  family: 4,
});

db.connect()
  .then(() => console.log("✅ Database connected successfully"))
  .catch(err => console.log("❌ DB connection error:", err));

module.exports = db;