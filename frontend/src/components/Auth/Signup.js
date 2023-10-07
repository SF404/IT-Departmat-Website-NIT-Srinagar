import React, { Component } from "react";
import "./Signup.css"; // Import your CSS file
import axios from "axios";

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      error: "",
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    const data = 1001;
    console.log(data);
    axios
      .get(`/api/temp/?sid=${data}`)
      .then((response) => {
        // Handle the response data here
        console.log("Response:", response.data);
      })
      .catch((error) => {
        // Handle errors here
        console.error("Error:", error);
      });
    // event.preventDefault();
    // try {
    //   const response = await fetch("/api/save_teacher/", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({
    //       sid,
    //       name,
    //       username,
    //       email,
    //       password,
    //       temporary,
    //     }),
    //   });
    //   if (response.ok) {
    //     // Teacher saved successfully, handle the response as needed
    //     console.log("Teacher saved successfully");
    //   } else {
    //     // Handle error response
    //     const data = await response.json();
    //     console.error(data.error);
    //   }
    // } catch (error) {
    //   console.error("An error occurred:", error);
    // }
  };
  render() {
    const { username, email, password, confirmPassword, error } = this.state;
    return (
      <div className="signup-container">
        <h2>Sign Up</h2>
        {error && <div className="error-message">{error}</div>}
        <form onSubmit={this.handleSubmit} className="signup-form">
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
        </form>
      </div>
    );
  }
}
export default Signup;
