import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {  signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

const Login = () => {
  const [err, setErr] = useState(false);
  const navigate = useNavigate();
  const handleSumbit = async (e) => {
    e.preventDefault();
    const email = e.target[0].value;
    const password = e.target[1].value;
    try {
    signInWithEmailAndPassword(auth, email, password)
    navigate("/")
    } catch (err) {
      setErr(true);
    }
  };
  return (
    <div className="formContainer">
      <div className="formWrapper">
        <span className="logo">Chat</span>
        <span className="title">Login</span>
        <form onSubmit={handleSumbit}>
          <input type="email" placeholder="email" />
          <input type="password" placeholder="password" />

          <button>Login</button>
          {err && <span>Something went wrong</span>}

        </form>
        <p>You don`t have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
};

export default Login;
