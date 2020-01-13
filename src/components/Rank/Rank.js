import React from "react";

const Rank = ({ name, upload }) => {
  return (
    <div>
      <div className="white f3">{`${name} your image count is....`}</div>
      <div className="white f3">{`${upload}`}</div>
    </div>
  );
};

export default Rank;
