import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState({
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "/api/auth/login/",
        formData
      );
      console.log("Response Status Code:", response.status);
      setMessage({ message: response.data.message });
      switch (response.status) {
        case 200:
          const accessToken = response.data.access_token;
          const refreshToken = response.data.refresh_token;
          await localStorage.setItem("TokenA", accessToken);
          await localStorage.setItem("TokenR", refreshToken);
          navigate("/dashboard");
          break;
        default:
          setMessage({
            message: "Somthing went Wrong in Frontend! Please contact TechTeam",
          });
          break;
      }
    } catch (error) {
      setMessage({ message: "Username and Password is Unauthorized" });
      console.log("post failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            required
            minLength="2"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            required
            minLength="2"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        <p>*{message.message}</p>
      </form>
    </div>
  );
}

export default Login;
