import React from "react";

const withAuthenticate = Login => App =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        authorized: false
      };
    }
    componentDidMount() {
      if (!localStorage.getItem("user")) {
        this.setState({ authorized: false });
      } else {
        this.setState({ authorized: true });
      }
    }
    register(e) {
      localStorage.setItem("user", e.target.name);
      this.setState({ authorized: true });
    }
    // toSetUsername = e => {
    //   this.setState({ username: e.target.value });
    //   // console.log(this.state.username);
    // };
    // toSetPassword = e => {
    //   this.setState({ password: e.target.value });
    //   // console.log(this.state.password);
    // };
    // login = e => {
    //   //   e.preventDefault();
    //   if (this.state.username.length > 0) {
    //     localStorage.setItem("user", this.state.username);
    //     // console.log(this.state.authorized);
    //   }
    // };

    render() {
      if (this.state.authorized) return <App />;
      return <Login register={this.register} />;
    }
  };

export default withAuthenticate;
