const db = require("../db");
const bcrypt = require("bcrypt");
// 1
const jwt = require("jsonwebtoken");
// REGISTER USER
exports.register = async (req, res) => {
  const { name, email, phone, password } = req.body;

  try {
    // check if user exists
    db.query(
      "SELECT email FROM users WHERE email = ?",
      [email],
      async (err, result) => {
        if (result.length > 0) {
          return res.status(400).json({ message: "User already exists" });
        }

        // hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // insert user
        db.query(
          "INSERT INTO users (name, email, phone, password) VALUES (?, ?, ?, ?)",
          [name, email, phone, hashedPassword],
          (err, result) => {
            if (err) {
              return res.status(500).json({ message: "Database error" });
            }

            res.status(201).json({
              message: "User registered successfully",
            });
          }
        );
      }
    );
  } catch (error) {
    res.status(500).json({ message: "Server error" });
  }
};

// LOGIN USER
exports.login = (req, res) => {
  const { email, password } = req.body;

  db.query(
    "SELECT * FROM users WHERE email = ?",
    [email],
    async (err, result) => {
      if (result.length === 0) {
        return res.status(404).json({ message: "User not found" });
      }

      const user = result[0];

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res.status(401).json({ message: "Wrong password" });
      }

      // 🔥 CREATE TOKEN
      const token = jwt.sign(
        { id: user.id, email: user.email },
        "SECRET_KEY_123",
        { expiresIn: "1d" }
      );

      res.json({
        message: "Login successful",
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  );
};