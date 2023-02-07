import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAdmin, logIn, setIsAdmin } from "../../utils/CheckLogin";
const EmployeeLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const requestBody = {
      username: email,
      password: password,
    };
    axios
      .post("http://localhost:8100/token", requestBody)
      .then((response) => {
        console.log(response.data.token);
        const token = `Bearer ${response.data.token}`;
        logIn(token);
        localStorage.setItem("emailId", requestBody.username);
        console.log();
        if (requestBody.username === "axisb9092504@gmail.com") {
          navigate("/news-feed");
          localStorage.setItem("admin", true);
        } else {
          navigate("/news-feed");
          alert("Login Sucessful!");
        }

        window.location.reload();
      })
      .catch((err) => {
        alert("Invalid Credentials");
      });
  };

  console.log("AfterLogOut", isAdmin());
  
  return (
    <div class="content">
      <div class="text">Login Form</div>

      <div class="field">
        <span class="fas fa-user"></span>
        <input
          id="empid"
          type="text"
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <label>Employee Email ID</label>
      </div>
      <div class="field">
        <span class="fas fa-lock"></span>
        <input
          id="password"
          type="password"
          required
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
        <label>Password</label>
      </div>
      <button class="btnLogin" onClick={(e) => handleSubmit(e)}>
        Sign in
      </button>
    </div>
  );
};

export default EmployeeLogin;
