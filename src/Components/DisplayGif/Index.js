import React from "react";

function DisplayGif({ gif }) {
  console.log({gif})
  return (
    <img src={gif} alt="a gif"/>
  )
}

export default DisplayGif