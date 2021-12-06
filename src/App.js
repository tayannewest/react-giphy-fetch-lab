import './App.css';
import React, { useEffect, useState } from 'react';
import DisplayGif from './Components/DisplayGif/Index';

function App() {
const [gifData, setGifData] = useState("")

useEffect(() => {
  let gifUrl = "https://api.giphy.com/v1/gifs/trending?api_key=JNtTLV7jU6oAluzLgocS6849UBiTHCGh&limit=1&rating=g"

  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      console.log("Gif:", data)
      setGifData(data.data[0].images.original.url)
    })
  }
  makeApiCall()
}, [])

console.log("data", gifData)

  return (
    <div className="App">
      <DisplayGif 
      gif={gifData}
      />
    </div>
  );
}

export default App;
