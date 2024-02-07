import React, { FC } from "react";
import useQuizContext from "../../hooks/useQuizContext";
import { ButtonsContainer, FinalPageContainer } from "./FinalPage.style";
import { Button } from "../../ui/Button/Button";

interface FinalPageProps {}

const FinalPage: FC<FinalPageProps> = () => {
  const { score } = useQuizContext();

  return (
    <FinalPageContainer>
      Congratulations, you finished the quiz!
      <p>
        You got {score} correct questions out of 15! If you would like to review
        the answers, click <u>here</u>.
      </p>
      <p>
        If you would like to restart the quiz with new questions, click restart!
      </p>
      <p>Or else, click quit. See you next time!</p>
      <ButtonsContainer>
        <Button>Restart</Button>
        <Button>Quit</Button>
      </ButtonsContainer>
    </FinalPageContainer>
  );
};

export default FinalPage;
