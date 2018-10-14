import React from "react";

const ACategory = () => {
  return (
    <div className="achievement-category">
      <ul className="achievement-category-ul">
        <li className="achievement-category-li">
          {" "}
          <button className="achievement-category-ul-btn">
            <h4>Battle</h4>
          </button>
        </li>
        <li className="achievement-category-li">
          <button className="achievement-category-ul-btn">
            <h4>Character</h4>
          </button>
        </li>
        <li className="achievement-category-li">
          <button className="achievement-category-ul-btn">
            <h4>Quests</h4>
          </button>
        </li>
        <li className="achievement-category-li">
          <button className="achievement-category-ul-btn">
            <h4>Item</h4>
          </button>
        </li>
        <li className="achievement-category-li">
          <button className="achievement-category-ul-btn">
            <h4>Dungeons</h4>
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ACategory;
