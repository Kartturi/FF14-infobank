import React from "react";
import { connect } from "react-redux";

const MountInfo = props => {
  const mountInfo = props.currentMount;

  const checkImage = img => {
    if (img.onLoad) {
      return <img src={img} alt={mountInfo.name} />;
    } else {
      return <h4>loading</h4>;
    }
  };

  if (mountInfo) {
    console.log(mountInfo.name);

    return (
      <div className="mounts-info">
        <h2>{mountInfo.name}</h2>
        <div className="mounts-info-image-container">
          <img src={mountInfo.icon} alt={mountInfo.name} />
        </div>
        <div className="mounts-info-info">
          <p>{mountInfo.info}</p>
        </div>
        <div className="mounts-info-bottom">
          <p>{mountInfo.can_fly === 1 ? "Can Fly" : "No Fly"}</p>
          <p>{mountInfo.patch.name + " " + mountInfo.patch.number}</p>
        </div>
        <h4 className="mounts-info-summon">{mountInfo.summon}</h4>
      </div>
    );
  } else {
    return (
      <div className="mounts-info">
        <h2>Company Chocobo</h2>
        <div className="mounts-info-image-container">
          <img
            src="https://secure.xivdb.com/img/game/068000/068401.png"
            alt="Company Chocobo"
          />
        </div>
        <div className="mounts-info-info">
          <p>
            Born and bred in the city-state of Ishgard, the majority of company
            chocobos are geldings of the rouncey variety; however, massive
            destriers and miniature Belah'dian jennets are also raised to
            accommodate the builds of Roegadyn and\nLalafellin riders
            respectively.
          </p>
        </div>
        <div className="mounts-info-bottom">
          <p>Can Fly</p>
          <p>A Realm Reborn 2.0</p>
        </div>
        <h4 className="mounts-info-summon">
          Summon your Grand Company-issued battle chocobo.
        </h4>
      </div>
    );
  }
};

const mapStateToProps = state => ({
  currentMount: state.mounts.currentMountData
});

export default connect(
  mapStateToProps,
  null
)(MountInfo);
