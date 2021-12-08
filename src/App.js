import './App.css';
import React, { useEffect, useState } from 'react';
import DisplayGif from './Components/DisplayGif/Index';
import Form from './Components/Form/Index';
import RandomizeGif from './Components/RandomizeGif/Index';

function App() {
const [gifData, setGifData] = useState("")
const [gifTitle, setGifTitle] = useState("")

const handleSubmit = title => {
  console.log("App - makeApiCall - title", title)
  setGifTitle(title)
}

useEffect(() => {
  let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=JNtTLV7jU6oAluzLgocS6849UBiTHCGh&q=${gifTitle}&limit=1&offset=0&rating=pg-13&lang=en`
  
  const makeApiCall = () => {
    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      console.log("Gif", data)
      setGifData(data.data)
    })
  }
  makeApiCall()
}, [gifTitle])

console.log("data", gifData)

  return (
    <div className="App">
      <div>
        <h1>Do you say it Gif (correct) or Jiff (weird and bad)?</h1>
        </div>
      {gifData.length ? <DisplayGif gif={gifData}/> : <img src="https://media2.giphy.com/media/yGLA1z4KSOPxFIDTJx/giphy.gif?cid=22d1d1e2uiu2z7sc9ze5dx4x3sre7f815qdr881c8wf7syhn&rid=giphy.gif&ct=g" alt="hehehe"/>}
      <Form handleSubmit={handleSubmit} />
      <button onClick = {() => <RandomizeGif/>}>Randomize!</button>
    </div>
  );
}

export default App;
