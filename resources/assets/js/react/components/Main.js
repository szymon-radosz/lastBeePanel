import React, { Component } from "react";
import Nav from "./navbar";
import DashboardMain from "./DashboardMain/DashboardMain";
import Sidebar from "./Sidebar";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import OfferListMain from "./OfferList/OfferListMain";
import Login from "./login";
import Register from "./register";
import Home from "./home";
import Forgot from "./forgot";
import Reset from "./reset";
import loader from "./../../../images/loader.svg";

const appPath = "http://127.0.0.1:8080/";

import { withRouter } from "react-router-dom";

class Index extends Component {
  constructor(props) {
    super(props);

    this.state = {
      alertSuccess: false,
      alertSuccessDescription: "",
      alertWarning: false,
      alertWarningDescription: "",
      loader: false,
      userIsLoggedIn: false,
      country: "USA"
    };

    this.showAlertSuccess = this.showAlertSuccess.bind(this);
    this.showAlertWarning = this.showAlertWarning.bind(this);
    this.hideAlertSuccess = this.hideAlertSuccess.bind(this);
    this.hideAlertWarning = this.hideAlertWarning.bind(this);
    this.switchLoader = this.switchLoader.bind(this);
    this.setSignedInUser = this.setSignedInUser.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  switchLoader(state) {
    return this.setState({
      loader: state
    });
  }

  showAlertSuccess(info) {
    this.setState({
      alertSuccess: true,
      alertSuccessDescription: info
    });

    setTimeout(
      function() {
        this.setState({ alertSuccess: false });
      }.bind(this),
      4000
    );
  }

  showAlertWarning(info) {
    this.setState({
      alertWarning: true,
      alertWarningDescription: info
    });

    setTimeout(
      function() {
        this.setState({ alertWarning: false });
      }.bind(this),
      4000
    );
  }

  switchLoader(state) {
    return this.setState({
      loader: state
    });
  }

  hideAlertSuccess() {
    this.setState({
      alertSuccess: false
    });
  }

  setSignedInUser() {
    //console.log("setSignedInUser");
    this.setState({ userIsLoggedIn: !this.state.userIsLoggedIn });
  }

  hideAlertWarning() {
    this.setState({
      alertWarning: false
    });
  }

  componentDidMount() {
    this.props.history.push("login");
  }

  render() {
    return (
      <div className="container">
        {this.state.loader && (
          <div className="loaderContainer">
            <div className="loader">
              <img src={loader} />
            </div>
          </div>
        )}
        {this.state.alertSuccess && (
          <div className="alert alert-success alert-dismissible" role="alert">
            <a href="#" className="close" onClick={this.hideAlertSuccess}>
              ×
            </a>
            <strong>{this.state.alertSuccessDescription}</strong>
          </div>
        )}

        {this.state.alertWarning && (
          <div className="alert alert-danger alert-dismissible" role="alert">
            <a href="#" className="close" onClick={this.hideAlertWarning}>
              ×
            </a>
            <strong>{this.state.alertWarningDescription}</strong>
          </div>
        )}

        <Nav
          userIsLoggedIn={this.state.userIsLoggedIn}
          setSignedInUser={this.setSignedInUser}
          country={this.state.country}
        />
        <div className="pageContent">
          {this.state.userIsLoggedIn && (
            <Route
              exact
              path="/"
              render={() => {
                return (
                  <DashboardMain
                    appPath={appPath}
                    handleChange={this.handleChange}
                    country={this.state.country}
                    switchLoader={this.switchLoader}
                    showAlertSuccess={this.showAlertSuccess}
                    showAlertWarning={this.showAlertWarning}
                  />
                );
              }}
            />
          )}
          {this.state.userIsLoggedIn && (
            <Route
              exact
              path="/offer-list"
              render={() => {
                return (
                  <OfferListMain
                    appPath={appPath}
                    switchLoader={this.switchLoader}
                    showAlertSuccess={this.showAlertSuccess}
                    showAlertWarning={this.showAlertWarning}
                  />
                );
              }}
            />
          )}

          <Route
            exact
            path="/login"
            render={() => {
              return <Login setSignedInUser={this.setSignedInUser} />;
            }}
          />
        </div>
      </div>
    );
  }
}

export default withRouter(Index);
