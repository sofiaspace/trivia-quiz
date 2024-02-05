import React, { FC } from "react";
import { LevelsPageContainer } from "./LevelsPage.style";
import { Button } from "../../ui/Button/Button";
import useQuizContext from "../../hooks/useQuizContext";

interface LevelsPageProps {}

const LevelsPage: FC<LevelsPageProps> = () => {
  const { dispatch } = useQuizContext();

  return (
    <LevelsPageContainer>
      <p>Choose the difficulty of the quiz:</p>
      <Button
        onClick={() => dispatch({ type: "setDifficulty", payload: "easy" })}
      >
        Easy
      </Button>
      <Button
        onClick={() => dispatch({ type: "setDifficulty", payload: "medium" })}
      >
        Medium
      </Button>
      <Button
        onClick={() => dispatch({ type: "setDifficulty", payload: "hard" })}
      >
        Hard
      </Button>
    </LevelsPageContainer>
  );
};

export default LevelsPage;
