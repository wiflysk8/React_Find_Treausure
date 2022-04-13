import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";

const Table = ({ images, index, winCoor, counter, setCounter }) => {
  console.log(winCoor);
  const [cell, setCell] = useState();
  const [clicked, setClicked] = useState(false);
  const [isFlipped, setIsFlipped] = useState(false);

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const checkShot = (index, winCoor) => {
    if (index === winCoor && clicked === false) {
      setCounter(counter + 1);
      setCell(images.win);
      setTimeout(() => {
        alert("You Win in " + (counter + 1) + " shots!");
        setClicked(true);
        window.location.reload();
      }, 150);
    } else if (clicked === false) {
      setCell(images.miss);
      setCounter(counter + 1);
      setClicked(true);
    }
  };

  return (
    <div className="card">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
        <div>
          <img
            onClick={() => {
              checkShot(index, winCoor);
              handleClick();
            }}
            src={images.default}
            alt="cell"
          />
        </div>

        <div>
          <img
            onClick={() => {
              checkShot(index, winCoor);
              handleClick();
            }}
            src={cell}
            alt="cell"
          />
        </div>
      </ReactCardFlip>
      {/* <img onClick={() => checkShot(index, winCoor)} src={cell} alt="cell" /> */}
    </div>
  );
};

export default Table;
