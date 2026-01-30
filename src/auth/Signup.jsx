import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function Signup() {
  const { signup } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();

    // 🔴 REQUIRED FIELD CHECK
    if (!email || !password) {
      setError("Email and password are required");
      return;
    }

    // 🔴 EMAIL FORMAT CHECK
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address");
      return;
    }

    // 🔴 PASSWORD STRENGTH CHECK
    if (password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    // ✅ ALL GOOD
    setError("");
    signup(email, password);
  };

  return (
    <div className="auth-box">
      <form onSubmit={submit}>
        <h2>Signup</h2>

        {error && <p style={{ color: "red" }}>{error}</p>}

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <div className="password-field">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <span
            className="eye"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        </div>

        <button type="submit">Create Account</button>
      </form>
    </div>
  );
}

export default Signup;
