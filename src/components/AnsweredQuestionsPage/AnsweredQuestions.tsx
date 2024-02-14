import { FC } from "react";
import he from "he";
import {
  AnsweredQuestionsContainer,
  AnswersContainer,
  DisplayedQuestions,
  QuestionsList,
} from "./AnsweredQuestions.style";
import useQuizContext from "../../hooks/useQuizContext";
import { Button } from "../../ui/Button/Button";
import { ButtonsContainer } from "../FinalPage/FinalPage.style";

const AnsweredQuestions: FC = () => {
  const { allAnswers, questions, dispatch } = useQuizContext();

  return (
    <AnsweredQuestionsContainer>
      <p>
        On this page, you’ll find a comprehensive display of all the questions,
        along with their corresponding correct answers and your provided
        responses.
      </p>
      <DisplayedQuestions>
        <ol>
          {questions?.map((question, index) => (
            <QuestionsList>
              <div>{he.decode(question.question)}</div>
              <AnswersContainer>
                <div>Correct answer: {he.decode(question.correct_answer)}</div>
                <div>Your answer: {he.decode(allAnswers[index])}</div>
              </AnswersContainer>
            </QuestionsList>
          ))}
        </ol>
      </DisplayedQuestions>
      <ButtonsContainer>
        <Button onClick={() => dispatch({ type: "restart" })}>Restart</Button>
        <Button onClick={() => dispatch({ type: "submit" })}>Submit</Button>
      </ButtonsContainer>
    </AnsweredQuestionsContainer>
  );
};

export default AnsweredQuestions;
