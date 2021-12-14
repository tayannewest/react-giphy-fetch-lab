import './App.css';
import React, { useEffect, useState } from 'react';
import DisplayGif from './Components/DisplayGif/Index';
import Form from './Components/Form/Index';
import RandomizeGif from './Components/RandomizeGif/Index';

function App() {
const [gifData, setGifData] = useState("")
const [randomData, setRandomData] = useState("")
const [gifTitle, setGifTitle] = useState("")

const handleSubmit = title => {
  console.log("App - makeApiCall - title", title)
  setGifTitle(title)
}

useEffect(() => {
  let gifUrl = `https://api.giphy.com/v1/gifs/search?api_key=JNtTLV7jU6oAluzLgocS6849UBiTHCGh&q=${gifTitle}&limit=1&offset=0&rating=pg-13&lang=en`

    fetch(gifUrl)
    .then(res => res.json())
    .then(data => {
      console.log("Gif", data)
      setGifData(data.data)
      setRandomData(false)
    })
}, [gifTitle])

useEffect(() => {
  let randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=JNtTLV7jU6oAluzLgocS6849UBiTHCGh&tag=&rating=pg-13`
  
      fetch(randomUrl)
      .then(res => res.json())
      .then(data => {
        setRandomData(data.data)
      })
}, [])

const randomizeGif = () => {
  const randomUrl = "https://api.giphy.com/v1/gifs/random?api_key=JNtTLV7jU6oAluzLgocS6849UBiTHCGh&tag=&rating=pg-13"

  fetch(randomUrl)
  .then(res => res.json())
  .then(data => {
    setRandomData(data.data)
  })
}

console.log("data", gifData)

  return (
    <div className="App">
      <div>
        <h1>Do you say it Gif (correct) or Jiff (weird and bad)?</h1>
        </div>
      {!!gifData.length && <DisplayGif gif={gifData}/>}
      {randomData && <RandomizeGif gif={randomData}/>}
      <Form handleSubmit={handleSubmit} />
      <button onClick = {randomizeGif}>Randomize!</button>
    </div>
  );
}

// I don't understand what I'm missing on the randomize button, I'm still working on it but I'm just not sure what the disconnect is

export default App;
