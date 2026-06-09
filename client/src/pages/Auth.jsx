// import { useState } from "react";
// import "./auth.css";

// const BASE_URL = "https://travel-agency-backend-nt1d.onrender.com";

// export default function Auth() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     phone: "",
//     password: "",
//   });

//   const [error, setError] = useState("");

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async () => {
//     setError("");
//     setLoading(true);

//     const url = isLogin
//       ? `${BASE_URL}/api/auth/login`
//       : `${BASE_URL}/api/auth/register`;

//     const body = isLogin
//       ? { email: form.email, password: form.password }
//       : form;

//     try {
//       const res = await fetch(url, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(body),
//       });

//       const data = await res.json();

//       // ❗ FIX: show backend error message properly
//       if (!res.ok) {
//         setError(data.message || "Request failed");
//         setLoading(false);
//         return;
//       }

//       // SIGNUP
//       if (!isLogin) {
//         alert("Signup successful! Please login now.");
//         setIsLogin(true);
//       }

//       // LOGIN
//       if (isLogin) {
//         localStorage.setItem("token", data.token);
//         localStorage.setItem("user", JSON.stringify(data.user));

//         alert("Login successful!");

//         window.location.href = "/";
//       }

//       setForm({ name: "", email: "", phone: "", password: "" });
//     } catch (err) {
//       console.log("Fetch error:", err); // 👈 IMPORTANT for debugging
//       setError("Cannot connect to server. Check backend.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-card">

//         <h1>{isLogin ? "Login 👋" : "Sign Up 🚀"}</h1>

//         {error && <p className="error">{error}</p>}

//         {!isLogin && (
//           <input name="name" placeholder="Name" onChange={handleChange} />
//         )}

//         <input name="email" placeholder="Email" onChange={handleChange} />

//         {!isLogin && (
//           <input name="phone" placeholder="Phone" onChange={handleChange} />
//         )}

//         <input
//           name="password"
//           type="password"
//           placeholder="Password"
//           onChange={handleChange}
//         />

//         <button onClick={handleSubmit} disabled={loading}>
//           {loading ? "Loading..." : isLogin ? "Login" : "Sign Up"}
//         </button>

//         <p onClick={() => setIsLogin(!isLogin)} style={{ cursor: "pointer" }}>
//           {isLogin ? "Create account" : "Already have account"}
//         </p>

//       </div>
//     </div>
//   );
// }
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

      if (isLogin) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("user", JSON.stringify(data.user));
        alert("Login successful!");
        window.location.href = "/";
      } else {
        alert("Registration successful! Please login.");
        setIsLogin(true);
        setForm({ name: "", email: "", phone: "", password: "" });
      }
    } catch (err) {
      setError("Server not reachable");
      console.log(err);
    }

    setLoading(false);
  };

  return (
    <div className="auth-container">
      <form className="auth-card" onSubmit={handleSubmit}>

        <h1>{isLogin ? "Welcome Back 👋" : "Create Account 🚀"}</h1>
        <p>{isLogin ? "Login to continue" : "Sign up to get started"}</p>

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
            ? "Loading..."
            : isLogin
            ? "Login"
            : "Create Account"}
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


