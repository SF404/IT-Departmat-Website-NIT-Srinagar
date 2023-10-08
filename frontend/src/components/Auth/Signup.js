import React, { Component } from "react";
import "./Signup.css"; // Import your CSS file
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      message: "",
      error: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { name, username, email, password, confirmPassword } = this.state;
    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/auth/register/",
        {
          name,
          username,
          email,
          password,
        }
      );

      if (response.status === 201) {
        // Registration successful
        this.setState({
          message: response.data.message,
        });
      } else {
        this.setState({
          message: "Somthing went Wrong in Frontend! Please contact TechTeam",
        });
      }
    } catch (error) {
      this.setState({
        message: "username already exists use different",
      });
    }
  };

  render() {
    const { name, username, email, password, confirmPassword, error, message } =
      this.state;
    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={this.handleSubmit} className="signup-form">
          <div>
            <label>Name:</label>
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Username:</label>
            <input
              type="text"
              name="username"
              value={username}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Email:</label>
            <input
              type="email"
              name="email"
              value={email}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <label>Password:</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={this.handleInputChange}
              required
            />
          </div>
          <div>
            <button type="submit">Sign Up</button>
          </div>
          <p>*{message}</p>
        </form>
      </div>
    );
  }
}
export default Signup;
