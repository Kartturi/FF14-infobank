import React, { Component } from "react";
import ButtonGroup from "./ButtonGroup";

class HeaderGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };
  }
  render() {
    return (
      <div className="header-group">
        <h1>Final fantasy 14 infobank</h1>
        <ButtonGroup />
      </div>
    );
  }
}

export default HeaderGroup;
