

import { useState } from "react";
import "./auth.css";

const BASE_URL = "https://travel-agency-backend-nt1d.onrender.com";

export default function Auth() {
  const [isLogin, setIsLogin] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    const url = isLogin
      ? `${BASE_URL}/api/auth/login`
      : `${BASE_URL}/api/auth/register`;

    const body = isLogin
      ? {
          email: form.email,
          password: form.password,
        }
      : form;

    try {
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message || "Something went wrong");
        setLoading(false);
        return;
      }

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));

        alert("Login Successful!");
        window.location.href = "/";
      } else {
        setShowSuccess(true);

        setForm({
          name: "",
          email: "",
          phone: "",
          password: "",
        });
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
          {isLogin
            ? "Welcome Back 👋"
            : "Future Fit Canada 🇨🇦"}
        </h1>

        <p>
          {isLogin
            ? "Login to continue"
            : "Apply and start your journey today"}
        </p>

        {error && (
          <div className="error">
            {error}
          </div>
        )}

        {!isLogin && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="email"
          name="email"
          placeholder="Email Address"
          value={form.email}
          onChange={handleChange}
          required
        />

        {!isLogin && (
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={form.phone}
            onChange={handleChange}
            required
          />
        )}

        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          required
        />

        <button
          type="submit"
          disabled={loading}
        >
          {loading
            ? "Please Wait..."
            : isLogin
            ? "Login"
            : "Apply Now"}
        </button>

        <p className="toggle">
          {isLogin
            ? "Don't have an account?"
            : "Already have an account?"}{" "}
          <span
            onClick={() =>
              setIsLogin(!isLogin)
            }
          >
            {isLogin
              ? "Register"
              : "Login"}
          </span>
        </p>
      </form>

      {showSuccess && (
        <div className="modal-overlay">
          <div className="success-modal">

            <div className="success-icon">
              ✅
            </div>

            <h2>
              Registration Successful!
            </h2>

            <p className="success-subtitle">
              Please send the following documents:
            </p>

            <ul className="doc-list">
              <li>Full Name</li>
              <li>Passport</li>
              <li>Birth Certificate</li>
              <li>Kebele ID</li>
              <li>Passport Photo</li>
              <li>Address</li>
              <li>Phone Number</li>
            </ul>

            <div className="telegram-box">
              Telegram / Phone
              <br />
              <strong>
                957 378 075
              </strong>
            </div>

            <button
              className="close-btn"
              onClick={() => {
                setShowSuccess(false);
                setIsLogin(true);
              }}
            >
              Continue To Login
            </button>

          </div>
        </div>
      )}

    </div>
  );
}

