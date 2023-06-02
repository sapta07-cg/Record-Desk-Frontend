import { useState } from "react";

const File = () => {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      <h1>The Value of counter is {counter}</h1>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Increase
      </button>
      <button
        onClick={() => {
          setCounter(counter - 1);
        }}
      >
        Decrease
      </button>
    </div>
  );
};

export default File;
