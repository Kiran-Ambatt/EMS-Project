import React from "react";
import "./Login.css";

const Login = () => {
  return (
    <div className="wrapper">
      <form action="">
        <h1>Login Page</h1>
        <div className="input-field">
          <input type="email" name="User Name" id="" placeholder="User Name" />
        </div>
        <div className="input-field">
          <input type="password" name="" id="" placeholder="Password" />
        </div>
        <div className="button">
          <button type="submit">Login</button>
        </div>
      </form>
    </div>
  );
};

export default Login;
