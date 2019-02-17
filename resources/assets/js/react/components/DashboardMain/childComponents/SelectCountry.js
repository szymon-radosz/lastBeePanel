import React, { Component } from "react";

class SelectCountry extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="selectCountry">
        <select
          name="country"
          onChange={this.props.handleChange}
          value={this.props.country}
        >
          <option value="USA">USA</option>
          <option value="UK">UK</option>
          <option value="PL">PL</option>
        </select>
      </div>
    );
  }
}

export default SelectCountry;
