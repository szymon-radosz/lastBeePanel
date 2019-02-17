import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  logout(e) {
    e.preventDefault();
    axios
      .post("api/logout")
      .then(response => {
        this.props.history.push("/");
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleClick(e) {
    e.preventDefault();
    this.props.history.push("/");
  }
  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#navbar"
              aria-expanded="false"
              aria-controls="navbar"
            >
              <span className="sr-only">Toggle navigation</span>
              <span className="icon-bar" />
              <span className="icon-bar" />
              <span className="icon-bar" />
            </button>
            <a
              className="navbar-brand"
              href="#"
              onClick={this.handleClick.bind(this)}
            >
              Home
            </a>
          </div>
          <div id="navbar" className="navbar-collapse collapse">
            <ul className="nav navbar-nav navbar-right">
              <li>
                <Link to="/offer-list">Offer List</Link>
              </li>
              <li>
                <a href="#">{this.props.country}</a>
              </li>
              {!this.props.userIsLoggedIn ? (
                <li>
                  <Link to="/login">Login</Link>
                </li>
              ) : (
                <li onClick={this.props.setSignedInUser}>
                  <a href="#">Logout</a>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default withRouter(Nav);
