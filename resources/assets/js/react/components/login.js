import React, { Component } from "react";
import Nav from "./navbar";
import { Link } from "react-router-dom";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  onSubmit(e) {
    e.preventDefault();
    const { email, password } = this.state;
    axios
      .post("api/login", {
        email,
        password
      })
      .then(response => {
        this.setState({ err: false });
        if (!response.data.email) {
          this.props.setSignedInUser();
        }
      })
      .catch(error => {
        this.refs.email.value = "";
        this.refs.password.value = "";
        this.setState({ err: true });
      });
  }

  onChange(e) {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  render() {
    let error = this.state.err;
    let msg = !error ? "Login Successful" : "Wrong Credentials";
    let name = !error ? "alert alert-success" : "alert alert-danger";
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-8 col-md-offset-2">
              <div className="panel panel-default">
                <div className="panel-heading">Login</div>
                <div className="panel-body">
                  <div className="col-md-offset-2 col-md-8 col-md-offset-2">
                    {error != undefined && (
                      <div className={name} role="alert">
                        {msg}
                      </div>
                    )}
                  </div>
                  <form
                    className="form-horizontal"
                    role="form"
                    method="POST"
                    onSubmit={this.onSubmit.bind(this)}
                  >
                    <div className="form-group">
                      <label htmlFor="email" className="col-md-4 control-label">
                        E-Mail Address
                      </label>

                      <div className="col-md-6">
                        <input
                          id="email"
                          type="email"
                          ref="email"
                          className="form-control"
                          name="email"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label
                        htmlFor="password"
                        className="col-md-4 control-label"
                      >
                        Password
                      </label>

                      <div className="col-md-6">
                        <input
                          id="password"
                          type="password"
                          ref="password"
                          className="form-control"
                          name="password"
                          onChange={this.onChange.bind(this)}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <div className="col-md-8 col-md-offset-4">
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Login;
