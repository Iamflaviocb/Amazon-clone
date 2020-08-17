import React, { useState } from "react";
import "./Login.css";
import { Link, useHistory } from "react-router-dom";
import { auth } from "./firebase";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const login = (e) => {
    e.preventDefault();
    // login logic
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        //redirect to homapge
        // Use push to come back to page signin instaed of replace
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  const register = (e) => {
    e.preventDefault();
    // Create a registration
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        // created an user and redirect to home
        history.push("/");
      })
      .catch((e) => alert(e.message));
  };
  return (
    <div className="login">
      <Link to="/">
        <img
          className="login__logo"
          src="http://pngimg.com/uploads/amazon/amazon_PNG21.png"
          alt="logo-amazon"
        />
      </Link>
      <div className="login__container">
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <h5>Password</h5>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <button onClick={login} className="login__signInButton">
            Sign in
          </button>
        </form>
        <p>
          By signin-in you agree to Amazon's Condtions of Use & sale. Please se
          our privacy Notice, our Cookies Notice and our Interested-based Ads
          Notice.
        </p>
        <button onClick={register} className="login__registerButton">
          Create your Amazon Account
        </button>
      </div>
    </div>
  );
}

export default Login;
