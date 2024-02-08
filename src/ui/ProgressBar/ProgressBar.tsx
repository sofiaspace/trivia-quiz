import React, { FC, useEffect } from "react";
import { ProgressBarContainer, ProgressInfo } from "./ProgressBar.style";
import useQuizContext from "../../hooks/useQuizContext";

const ProgressBar: FC = () => {
  const { dispatch, progressValue, seconds, activeQuestion } = useQuizContext();

  const active = activeQuestion + 1;

  useEffect(() => {
    const interval = setInterval(() => {
      if (progressValue < 90) {
        dispatch({ type: "timer" });
      } else {
        dispatch({ type: "timeIsUp" });
      }
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [progressValue, dispatch]);

  return (
    <ProgressBarContainer>
      <progress value={progressValue} max={90}></progress>
      <ProgressInfo>
        <span>{active}/15</span>{" "}
        <span>
          {Math.floor(seconds / 60)} :{" "}
          {seconds % 60 < 10 ? "0" + (seconds % 60) : seconds % 60}
        </span>
      </ProgressInfo>
    </ProgressBarContainer>
  );
};

export default ProgressBar;
