import React from "react";

function DisplayGif({ gif }) {
  console.log({gif})
  return (
    <img src={gif[0].images.original.url} alt="a gif"/>
  )
}

export default DisplayGif