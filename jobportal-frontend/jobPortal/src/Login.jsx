import React from "react";

function Login() {
  return (
    <div>
      <h2>Login Page</h2>
      <input id="email" type="text" placeholder="Email" />
      <input id="password" type="password" placeholder="Password" />
      <button id="login-btn">Login</button>
    </div>
  );
}

export default Login;
