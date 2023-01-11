import React, { useState } from "react";

function Toggle() {
  const [ isOn, setIsOn ] = useState(true);
  const handleClick = () => {
      setIsOn((isOn) => !isOn);
      console.log(isOn)
  }

  const color = isOn ? "green" : "red";

  return (<button style={{background : color }}onClick={handleClick}>  
    {isOn ? "ON" : "OFF"}
  </button>);
}

export default Toggle;