import React, { FC } from "react";
import { ButtonsFooter, QuestionsPageContainer } from "./QuestionsPage.style";
import useQuizContext from "../../hooks/useQuizContext";
import { Button } from "../../ui/Button/Button";

const QuestionsPage: FC = () => {
  const { difficulty, dispatch } = useQuizContext();

  return (
    <QuestionsPageContainer>
      <p>
        You picked <b>{difficulty}</b> difficulty for your questions!
      </p>
      <p>Ιf you want to choose another level of difficulty, click Back. </p>
      <p></p>
      <p>
        If you are ready, take a deep breath and embrace yourself with the
        knowledge coming through 15 thrilling questions!
      </p>
      <p>But remember, you’ve got 90 seconds to answer to all questions! </p>
      <ButtonsFooter>
        <Button onClick={() => dispatch({ type: "active" })}>Back</Button>
        <Button onClick={() => dispatch({ type: "start" })}>Start</Button>
      </ButtonsFooter>
    </QuestionsPageContainer>
  );
};

export default QuestionsPage;
