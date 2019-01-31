import React from "react";

export default (props) => {
  return (
    <div>
      <h2>
        Score 
      </h2>
      <span id="p1-name">
        Player1
      </span>
      :
      <span id="p1-score">
      &nbsp;0 
      </span>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <span id="p2-name">
        Player2
      </span>
      :
      <span id="p2-score">
      &nbsp;0
      </span>
    </div>
  );
}