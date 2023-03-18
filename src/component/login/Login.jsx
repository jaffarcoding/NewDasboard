import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.scss";
import "./LoginRes.scss";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import axios from "axios";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    if (validation()) {
      axios
        .post("https://reqres.in/api/login", {
          email: email,
          password: password,
        })
        .then((response) => {
          toast("login succcesfully");
          console.log(response.data);
          navigate(`./home`);
          console.log(email);
        })
        .catch((erorr) => {
          toast("please enter correct email or password");
          console.log(erorr.response);
        });
    }
  };

  const validation = () => {
    if (email === "" || email === null) {
      toast("Please enter your email");
    }
    if (password === "" || password === null) {
      toast("please enter your  password");
    }
    return true;
  };
  return (
    <div className="container">
      <div className="loginbox">
        <h1>Welcome</h1>
        <p>Enter your Username and Password</p>
        <form onSubmit={submitHandler} className="loginform">
          <CiUser className="login-user" />
          <input
            name="email"
            type="text"
            placeholder="UserName"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
          <RiLockPasswordLine className="login-password" />
          <input
            name="password"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
          <button type="submit" className="btn">
            Login
          </button>
        </form>
        <Link to={"forgot"} className="forgot">
          Forgot Password?
        </Link>
      </div>
      <div className="footerLine">
        <span>Terms of Use</span>
        <span>Privacy Policy</span>
      </div>
      <p className="cpy"> &#169; Punctualiti 2022. All rights reserved</p>
      <ToastContainer />
    </div>
  );
};

export default Login;
