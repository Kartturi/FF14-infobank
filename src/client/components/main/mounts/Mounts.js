import React, { Component } from "react";
import MountsInfo from "./MountsInfo";
import MountsList from "./MountsList";
import { connect } from "react-redux";
import { getMountData } from "../../../redux/actions/mountsAction";
import mountsReducer from "../../../redux/reducers/mountsReducer";

class Mounts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }

  componentDidMount() {
    console.log("mounting");
    console.log(this.props.mounts.data === null);
    if (this.props.mounts.data === null) {
      this.props.getMountData();
    }
  }

  render() {
    return (
      <div className="mounts">
        <MountsInfo />
        <MountsList list={this.props.mounts} />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    mounts: state.mounts
  };
};

export default connect(
  mapStateToProps,
  { getMountData }
)(Mounts);
