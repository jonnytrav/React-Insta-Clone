import React from "react";
import "./Login.css";

const Login = props => {
  return (
    <div>
      <form onSubmit={props.register} className="login">
        <input type="text" placeholder="Username" name="name" />
        <input type="password" placeholder="Password" name="name" />
        <button onClick={props.register}>Log In</button>
      </form>
    </div>
  );
};

export default Login;
