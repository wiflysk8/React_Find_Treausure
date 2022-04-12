import React, { useState } from "react";

const Table = ({ images, index, winCoor, counter, setCounter }) => {
  console.log(winCoor);
  const [cell, setCell] = useState(images.default);
  const [clicked, setClicked] = useState(false);

  const checkShot = (index, winCoor) => {
    if (index === winCoor && clicked === false) {
      setCell(images.win);
      setTimeout(() => {
        alert("You Win in " + (counter + 1) + " shots!");
        setClicked(true);
        window.location.reload();
      }, 300);
    } else if (clicked === false) {
      setCell(images.miss);
      setCounter(counter + 1);
      setClicked(true);
    }
  };

  return (
    <>
      <img onClick={() => checkShot(index, winCoor)} src={cell} alt="cell" />
    </>
  );
};

export default Table;
