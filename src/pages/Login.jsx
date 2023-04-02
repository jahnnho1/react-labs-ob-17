import React, { useRef } from "react";
import "../styles/login.scss";
import logo_yard_sale from "../assets/logos/logo_yard_sale.svg";

const Login = () => {
  const form = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };
    console.log(data);
  };

  return (
    <div className="login">
      <div className="form-container">
        <img src={logo_yard_sale} alt="logo" className="logo" />

        <form action="/" className="form" ref={form}>
          <label htmlFor="email" className="label">
            Email address
          </label>
          <input
            type="text"
            id="email"
            placeholder="platzi@example.com"
            className="input input-email"
            name="email"
          />
          <label htmlFor="password" className="label">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="*********"
            className="input input-password"
            name="password"
          />
          <button className="primary-button login-button" onClick={handleSubmit} >Log in</button>
          <a href="/">Forgot my password</a>
        </form>
        <button className="secondary-button signup-button">Sign up</button>
      </div>
    </div>
  );
};

export default Login;
