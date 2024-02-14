import { FC } from "react";
import { LevelsPageContainer } from "./LevelsPage.style";
import { Button } from "../../ui/Button/Button";
import useQuizContext from "../../hooks/useQuizContext";
import { Difficulty } from "../../reducer/QuizReducer.types";

const LevelsPage: FC = () => {
  const { dispatch } = useQuizContext();

  return (
    <LevelsPageContainer>
      <p>Choose the difficulty of the quiz:</p>
      <Button
        onClick={() =>
          dispatch({ type: "setDifficulty", payload: Difficulty.easy })
        }
      >
        Easy
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: "setDifficulty", payload: Difficulty.medium })
        }
      >
        Medium
      </Button>
      <Button
        onClick={() =>
          dispatch({ type: "setDifficulty", payload: Difficulty.hard })
        }
      >
        Hard
      </Button>
    </LevelsPageContainer>
  );
};

export default LevelsPage;
