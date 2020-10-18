//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
var ReactDOM = require("react-dom");
const time = new Date();
const currenTime = time.getHours();
let msg;
let obj = {
  color: "red"
};
if (currenTime > 12 && currenTime < 18) {
  msg = "Good Afternoon";
  obj.color = "green";
} else if (currenTime > 18 && currenTime < 24) {
  msg = "Good Evening";
} else if (currenTime > 1 && currenTime < 12) {
  msg = "Good Morning";
  obj.color = "red";
} else {
  msg = "Good Night";
  obj.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={obj}>
    {msg}
  </h1>,
  document.getElementById("root")
);
