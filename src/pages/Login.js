import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loginStatus, setLoginStatus] = useState(true);
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className="login-page">
      <h1 className="login-heading">{loginStatus ? "Login" : "Signup"}</h1>

      <form className="login-form" onSubmit={handleSubmit}>
        {loginStatus === false ? (
          <input type="text" placeholder="Name" className="login-input" />
        ) : (
          ""
        )}

        <input type="email" placeholder="Email" className="login-input" />
        <input type="password" placeholder="Password" className="login-input" />

        <div className="login-links">
          <span
            className="forgot-password"
            onClick={() => setLoginStatus(false)}
          >
            {loginStatus ? "Forgot password?" : ""}
          </span>
          <span
            className="register-link"
            onClick={() => setLoginStatus(!loginStatus)}
          >
            {loginStatus ? "create account" : "login here"}
          </span>
        </div>

        <button
          type="submit"
          className="login-button"
          onClick={() => navigate("/")}
        >
          {loginStatus ? "log in" : "sign up"}
        </button>
      </form>
    </div>
  );
};

export default Login;
