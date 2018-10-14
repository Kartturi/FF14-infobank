import React from "react";
import { connect } from "react-redux";
import { storeCurrent } from "../../../redux/actions/mountsAction";
import PropTypes from "prop-types";

const MountsListItem = props => {
  const checkIfIconExist = icon => {
    if (icon === 0) {
      return "https://secure.xivdb.com/img/ui/noicon.png";
    } else if (icon > 5000) {
      return `https://secure.xivdb.com/img/game/008000/00${icon}.png`;
    } else {
      return `https://secure.xivdb.com/img/game/004000/00${icon}.png`;
    }
  };

  const handleClick = e => {
    const mountInfo = {};

    e.preventDefault();
    props.storeCurrent(props.content.name, props.content.id);
  };

  return (
    <li className="mounts-list-ul-li" onClick={handleClick}>
      <div className="mounts-list-ul-li-icon-container">
        <img src={checkIfIconExist(props.content.icon)} alt="" />
      </div>
      <p>{props.content.name}</p>
    </li>
  );
};

export default connect(
  null,
  { storeCurrent }
)(MountsListItem);
