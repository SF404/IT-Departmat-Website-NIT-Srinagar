import React, { useState } from "react";
import axios from "axios";
import styles from "./forgot_password.css"; // Import the CSS module

function ForgotPassword() {
  const [email, setEmail] = useState("email@.com");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [message, setMessage] = useState("");

  const handlePasswordReset = async () => {
    if (password !== passwordConfirmation) {
      setMessage("Passwords do not match.");
      return;
    }
    try {
      const response = await axios.post("/api/reset-password", {
        password,
      });
      if (response.status === 200) {
        setMessage("Password reset successful.");
      } else {
        setMessage(
          "Password reset failed. Please check your email and try again."
        );
      }
    } catch (error) {
      console.error("Error resetting password", error);
      setMessage("An error occurred. Please try again later.");
    }
  };

  return (
    <div className="forgot-password-container">
      <h2 className="forgot-password-header">Forgot Password</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        readOnly
        className="forgot-password-input"
      />
      <input
        type="password"
        placeholder="New Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="forgot-password-input"
      />
      <input
        type="password"
        placeholder="Re-type Password"
        value={passwordConfirmation}
        onChange={(e) => setPasswordConfirmation(e.target.value)}
        className="forgot-password-input"
      />
      <button onClick={handlePasswordReset} className="forgot-password-button">
        Reset Password
      </button>
      <p className="forgot-password-message">*{message}</p>
    </div>
  );
}

export default ForgotPassword;
