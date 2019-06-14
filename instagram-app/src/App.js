import React from "react";
import "./App.css";
import PostsPage from "./PostsContainer/PostsPage";
import Login from "./Login/Login";
import withAuthenticate from "./authentication/withAuthenticate";

localStorage.setItem("username", "username");
localStorage.setItem("password", "password");

const ComponentFromWithAuthenticate = withAuthenticate(Login)(PostsPage);

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return <ComponentFromWithAuthenticate />;
  }
}

export default App;
