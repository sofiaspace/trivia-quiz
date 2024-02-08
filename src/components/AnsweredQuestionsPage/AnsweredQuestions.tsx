import { FC } from "react";
import he from "he";
import {
  AnsweredQuestionsContainer,
  DisplayedQuestions,
  QuestionsList,
} from "./AnsweredQuestions.style";
import useQuizContext from "../../hooks/useQuizContext";
import { Button } from "../../ui/Button/Button";

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
              <div>
                Correct answer: {he.decode(question.correct_answer)}, your
                answer: {allAnswers[index]}
              </div>
            </QuestionsList>
          ))}
        </ol>
      </DisplayedQuestions>
      <Button onClick={() => dispatch({ type: "restart" })}>Restart</Button>
    </AnsweredQuestionsContainer>
  );
};

export default AnsweredQuestions;
