import React from "react";
import Mounts from "./main/mounts/Mounts";
import Achievement from "./main/achievement/achievement";
import Character from "./main/character/Character";
import Quests from "./main/quests/quests";

import store from "../store";
import { connect } from "react-redux";

const ShowContent = props => {
  const current = store.getState().current.isActive;
  if (current === "Mounts") {
    return <Mounts />;
  }
  if (current === "Achievement") {
    return <Achievement />;
  }
  if (current === "Character") {
    return <Character />;
  }
  if (current === "Quests") {
    return <Quests />;
  }

  return (
    <div className="initial-view">
      <h2>Choose category</h2>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isActive: state.current
  };
};

export default connect(
  mapStateToProps,
  {}
)(ShowContent);
