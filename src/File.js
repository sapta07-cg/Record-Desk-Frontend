import { useState } from "react";
import { useSelector } from "react-redux";

const File = () => {
  const number = useSelector((state) => state.counter.value);
  return (
    <div>
      <h1>The Value of getting from counter is {number}</h1>
    </div>
  );
};

export default File;
