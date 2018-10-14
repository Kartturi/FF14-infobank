import React, { Component } from "react";
import AGategory from "./aCategory";
import ADisplay from "./aDisplay";

class Achievement extends Component {
  constructor(props) {
    super(props);
    this.setState({
      current: ""
    });
  }

  render() {
    return (
      <div className="achievement">
        <AGategory />
        <ADisplay />
      </div>
    );
  }
}

export default Achievement;
