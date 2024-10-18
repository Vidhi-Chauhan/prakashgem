import React, { useState } from "react";
import logo from "../assets/logo-transparent-png.png";

const Login = ({ nextStep }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    nextStep(); // Move to shipping after login
  };

  return (
    <div className="checkout-login ">
      <a href="/" className=" flex justify-center">
        <img src={logo} alt="" className="logo" />
      </a>
      <p className="login-heading">Login to Prakashgem</p>
      <p className="login-desc">
        Login to unlock best prices and become an insider for our exclusive
        launches & offers.
      </p>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {/* <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        /> */}
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
