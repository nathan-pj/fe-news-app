import { useState } from "react";

export const useCount = () => {
  const [count, setCount] = useState();

  const increaseCount = () => {
    setCount(function (currCount) {
      return currCount + 1;
    });
  };
  return { count, increaseCount };
};
