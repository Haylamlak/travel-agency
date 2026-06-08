// const mysql = require("mysql2");

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "", // XAMPP default
//   database: "futurefit",
// });

// db.connect((err) => {
//   if (err) {
//     console.log("DB connection error:", err);
//   } else {
//     console.log("MySQL Connected ✅");
//   }
// });

// module.exports = db;


const mysql = require("mysql2");

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: 3306,
});

db.connect((err) => {
  if (err) {
    console.log("DB connection error:", err);
  } else {
    console.log("MySQL Connected ✅");
  }
});

module.exports = db;
