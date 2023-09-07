import { useState } from "react";

export default function Button() {
  const [minus, setMinus] = useState(0);
  const [plus, setPlus] = useState(0);
  const [isReset, setIsReset] = useState(false);

  function handleClickLeft() {
    setMinus(minus - 1);
  }
  function handleClickRight() {
    setPlus(plus + 1);
  }
  function handleClickReset() {
    setMinus(0);
    setPlus(0);
    setIsReset(false);
  }
  return (
    <>
      <div >
        <button className="btn" onClick={handleClickLeft}>-</button>
        <span className="span-btn" style={{ padding: "20px" }}>{isReset ? 0 : minus + plus}</span>
        <button className="btn" onClick={handleClickRight}>+</button>
      </div>
      <div style={{ padding: "20px" }}>
        <button className="btn" onClick={handleClickReset}>Reset</button>
      </div>
    </>
  );
}
