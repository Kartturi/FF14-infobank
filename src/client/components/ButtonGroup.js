import React, { Component } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { connect } from "react-redux";
import { setCurrentAction } from "../redux/actions/isActive";

class ButtonGroup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: ""
    };

    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(e) {
    let curr = e.target.textContent;
    this.setState((state, props) => {
      current: props;
    });

    this.props.setCurrentAction(curr);
  }

  render() {
    return (
      <div className="header-group-btns">
        <button className="btn" onClick={this.onSubmit}>
          Mounts
        </button>
        <button className="btn" onClick={this.onSubmit}>
          Achievement
        </button>
        <button className="btn" onClick={this.onSubmit}>
          Quests
        </button>
        <button className="btn" onClick={this.onSubmit}>
          Character
        </button>
      </div>
    );
  }
}

ButtonGroup.propTypes = {
  isActive: PropTypes.string
};

const mapStateToProps = state => {
  return {
    isActive: state.isActive
  };
};

export default connect(
  mapStateToProps,
  { setCurrentAction }
)(ButtonGroup);
