import React, { useEffect, useState } from "react";
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

  async function payload_check() {
    if (localStorage.getItem("TokenA") && localStorage.getItem("TokenR")) {
      const config = {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
          Accept: "application/json",
        },
      };
      try {
        const new_token = await axios.post(
          "/api/auth/jwt/refresh/",
          { refresh: localStorage.getItem("TokenR") },
          config
        );
        const accessToken = new_token.data.access;
        localStorage.setItem("TokenA", accessToken);
        console.log("token refreshed");
      } catch (err) {
        localStorage.removeItem("TokenA");
        localStorage.removeItem("TokenR");
        setMessage({
          message: "Refresh Token unvalid",
        });
        console.error(err);
      }
      try {
        const response = await axios.get("api/auth/users/me/", config);
        console.log(response.data);
        navigate("/dashboard");
        return;
      } catch (err) {
        localStorage.removeItem("TokenA");
        localStorage.removeItem("TokenR");
        setMessage({
          message: "Token expired try to login in again",
        });
        console.error(err);
      }
    }
    setMessage({
      message: "",
    });
    return;
  }

  useEffect(() => {
    payload_check();
  }, []);

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
      const response = await axios.post("api/auth/jwt/create/", formData, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("TokenA")}`,
        },
      });
      console.log("Response Status Code:", response);
      setMessage({ message: response.data.message });
      switch (response.status) {
        case 200:
          const accessToken = response.data.access;
          const refreshToken = response.data.refresh;
          localStorage.setItem("TokenA", accessToken);
          localStorage.setItem("TokenR", refreshToken);
          setMessage({
            message: "Login successfull",
          });
          break;
        default:
          setMessage({
            message: "Somthing went Wrong in Frontend! Please contact TechTeam",
          });
          break;
      }
    } catch (error) {
      setMessage({ message: "email and Password is Unauthorized" });
      console.log("post failed");
    }
    payload_check();
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
