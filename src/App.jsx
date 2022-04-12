import "./App.css";
import Table from "./components/Table";
import defaultImg from "./assets/default1.png";
import winImg from "./assets/react.png";
import missImg from "./assets/ang.png";
import { useState } from "react";

const tableBoard = [0, 1, 2, 3, 4, 5, 6, 7, 8];
const winCoor = Math.floor(Math.random() * tableBoard.length);

const images = {
  win: winImg,
  miss: missImg,
  default: defaultImg,
};

function App() {
  const [counter, setCounter] = useState(0);
  return (
    <div className="App">
      <h1 className="c-title">Find the Framework!</h1>
      <div className="c-tableboard">
        {tableBoard.map((index) => (
          <div key={index}>
            <Table images={images} index={index} winCoor={winCoor} setCounter={setCounter} counter={counter} />
          </div>
        ))}
        <span className="c-counter">Tries: {counter}</span>
      </div>
    </div>
  );
}

export default App;
