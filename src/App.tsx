import React from "react";
import ReactDOM from "react-dom/client";
// import logo from "./logo.svg";
import "./App.css";
import Memes from "./memes";

const { useState, useEffect } = React;
const randomNum = Math.floor(Math.random() * Memes.DataLength);

const App = () => {
  const [randomNumber, setRandomNumber] = useState(randomNum);
  console.log("re-render check");
  useEffect(() => {}, [randomNumber]);

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

//////////////////////////////////////////////
// original
// const App = function () {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// };
// export default App;
