import React, { useState } from "react";

export default function TableLetter({ letter, index }) {
  const [flip, setFlip] = useState(false);

  // Setimeout is set to 100 ms multiplied by whatever index we are looping over for each word.
  setTimeout(() => {
    setFlip(true);
  }, 100 * index);

  return <div className={flip ? "flip" : null}>{flip ? letter : null}</div>;
}
