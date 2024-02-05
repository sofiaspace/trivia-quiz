import React, { FC } from "react";
import { ButtonsFooter, QuestionsPageContainer } from "./QuestionsPage.style";
import useQuizContext from "../../hooks/useQuizContext";
import { Button } from "../../ui/Button/Button";

interface QuestionsPageProps {}

const QuestionsPage: FC<QuestionsPageProps> = () => {
  const { difficulty, dispatch } = useQuizContext();

  return (
    <QuestionsPageContainer>
      <p>
        You picked <b>{difficulty}</b> difficulty for your questions!
      </p>
      <p>Ιf you want to choose another level of difficulty, click Back. </p>
      <p>
        If you are ready, take a deep breath and embrace yourself with the
        knowledge coming!
      </p>
      <ButtonsFooter>
        <Button onClick={() => dispatch({ type: "back" })}>Back</Button>
        <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
      </ButtonsFooter>
    </QuestionsPageContainer>
  );
};

export default QuestionsPage;
