import React, { FC, useEffect, useState } from "react";
import { ProgressBarContainer } from "./ProgressBar.style";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = () => {
  const [value, setValue] = useState(0);
  const [seconds, setSeconds] = useState(10);

  useEffect(() => {
    const interval = setInterval(() => {
      if (value < 10) {
        setValue((oldValue) => oldValue + 1);
        setSeconds((seconds) => seconds - 1);
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [value]);

  return (
    <ProgressBarContainer>
      <progress value={value} max={10}></progress> 0:
      {seconds < 10 ? `0${seconds}` : seconds}
    </ProgressBarContainer>
  );
};

export default ProgressBar;
