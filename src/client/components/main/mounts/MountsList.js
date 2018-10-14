import React from "react";
import MountsListItem from "./MountsListItem";

const MountsList = props => {
  const arrData = props.list.data;
  let items = "";

  if (arrData !== null) {
    items = arrData.map((arr, index) => {
      return <MountsListItem content={arr} key={index} />;
    });
  } else {
    items = "";
  }

  return (
    <div className="mounts-list">
      <ul className="mounts-list-ul">{items}</ul>
    </div>
  );
};

export default MountsList;
