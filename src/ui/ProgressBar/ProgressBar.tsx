import React, { FC, useEffect } from "react";
import { ProgressBarContainer, ProgressInfo } from "./ProgressBar.style";
import useQuizContext from "../../hooks/useQuizContext";

interface ProgressBarProps {}

const ProgressBar: FC<ProgressBarProps> = () => {
  const { dispatch, progressValue, seconds, activeQuestion } = useQuizContext();

  const active = activeQuestion + 1;

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (progressValue < 10) {
  //       dispatch({ type: "timer" });
  //     } else {
  //       dispatch({ type: "nextQuestion" });
  //     }
  //   }, 1000);
  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [progressValue, dispatch]);

  return (
    <ProgressBarContainer>
      <progress value={progressValue} max={10}></progress>
      <ProgressInfo>
        <span>{active}/15</span>{" "}
        <span>0:{seconds < 10 ? `0${seconds}` : seconds}</span>
      </ProgressInfo>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
