import React, { useState } from "react";
import axios from "axios";
import { useHistory, useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { username, password } = formData;
    try {
      console.log(username, password);
      const response = await axios.post(
        `http://localhost:8000/api/loginpost/`,
        formData
      );
      if (response.status === 201 && response.data.sid !== undefined) {
        localStorage.setItem("usernameToken", username);
        localStorage.setItem("sidToken", response.data.sid);
        navigate("/dashboard", { state: response.data });
      } else {
        console.log("status failed");
      }
    } catch (error) {
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
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
}

export default Login;
