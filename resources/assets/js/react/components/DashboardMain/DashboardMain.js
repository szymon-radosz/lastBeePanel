import React, { Component } from "react";
import DashboardAddedProductsToDb from "./childComponents/DashboardAddedProductsToDb";
import SelectCountry from "./childComponents/SelectCountry";
class DashboardMain extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <SelectCountry
          handleChange={this.props.handleChange}
          country={this.props.country}
        />
        <DashboardAddedProductsToDb
          switchLoader={this.props.switchLoader}
          showAlertSuccess={this.props.showAlertSuccess}
          showAlertWarning={this.props.showAlertWarning}
          appPath={this.props.appPath}
          country={this.props.country}
        />
      </div>
    );
  }
}

export default DashboardMain;
