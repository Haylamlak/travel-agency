// const mysql = require("mysql2");
// require("dotenv").config();

// const db = mysql.createPool({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME,
//   port: process.env.DB_PORT || 3306,

//   waitForConnections: true,
//   connectionLimit: 10,
//   queueLimit: 0,
// });

// // TEST CONNECTION
// db.getConnection((err, connection) => {
//   if (err) {
//     console.log("❌ DB connection error:");
//     console.log(err);
//   } else {
//     console.log("✅ MySQL Pool Connected");
//     connection.release();
//   }
// });

// module.exports = db;


const mysql = require("mysql2");
require("dotenv").config();

const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

db.on("error", (err) => {
  console.log("❌ Pool error:", err);
});

module.exports = db;






