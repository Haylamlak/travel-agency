

import { useState } from "react";
import "./auth.css";

const BASE_URL = "https://travel-agency-backend-nt1d.onrender.com";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const url = isLogin
      ? `${BASE_URL}/api/auth/login`
      : `${BASE_URL}/api/auth/register`;

    const body = isLogin
      ? { email: form.email, password: form.password }
      : form;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      // LOGIN
      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login successful!");
        window.location.href = "/";
      }

      // REGISTER SUCCESS MESSAGE (YOUR REQUIREMENT)
      if (!isLogin) {
        alert(
`✅ Registration Successful!

Please send the following documents via Telegram:

• Full Name
• Passport
• Birth Certificate
• Kebele ID
• Passport Photo
• Address
• Phone Number

Telegram / Phone:
0+251 957 378 075`
        );

        setIsLogin(true);
        setForm({ name: "", email: "", phone: "", password: "" });
      }

    } catch (err) {
      console.log(err);
      setError("Server not reachable");
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>

        <h1>
          {isLogin ? "Welcome Back 👋" : "Future Fit Canada 🇨🇦"}
        </h1>

        <p>
          {isLogin
            ? "Login to continue"
            : "Apply and start your journey today"}
        </p>

        {error && <div className="error">{error}</div>}

        {!isLogin && (
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
          />
        )}

        <input
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
        />

        {!isLogin && (
          <input
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
        />

        <button type="submit" disabled={loading}>
          {loading
            ? "Please Wait..."
            : isLogin
            ? "Login"
            : "Apply Now"}
        </button>

        <p className="toggle">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <span onClick={() => setIsLogin(!isLogin)}>
            {isLogin ? "Register" : "Login"}
          </span>
        </p>

      </form>
    </div>
  );
}



