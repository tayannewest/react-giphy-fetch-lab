import React from "react";

function RandomizeGif({ gif }) {
  console.log({gif})
  return (
    <img src={gif.images.original.url} alt="a random gif"/>
  )
}

export default RandomizeGif