import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import Memes from "./memes";

const { useState, useEffect } = React;
const randomNum = Math.floor(Math.random() * Memes.DataLength);

const App = () => {
  const [randomNumber, setRandomNumber] = useState(randomNum);

  useEffect(() => {
    console.log("random number : ", randomNum);
  }, [randomNumber]);

  return (
    <div className="App">
      <header className="App-header">
        <img
          src={Memes.Data[randomNumber].url}
          className="App-logo"
          alt="logo"
        />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <button
          className="App-link"
          onClick={() =>
            setRandomNumber((number) => {
              return (number = Math.floor(Math.random() * Memes.DataLength));
            })
          }
        >
          <p>click for new meme :D</p>
        </button>
      </header>
    </div>
  );
};
export default App;
