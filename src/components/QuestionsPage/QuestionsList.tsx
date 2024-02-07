import React, { FC } from "react";
import useQuizContext from "../../hooks/useQuizContext";
import {
  AnswersContainer,
  QuestionContainer,
  QuestionsListContainer,
} from "./QuestionsList.style";
import he from "he";
import { Button } from "../../ui/Button/Button";

interface QuestionsListProps {}

const QuestionsList: FC<QuestionsListProps> = () => {
  const {
    questions = [],
    activeQuestion,
    dispatch,
    selectedAnswer,
  } = useQuizContext();
  console.log(questions);

  if (questions === undefined) return null;

  const { correct_answer, incorrect_answers } = questions[activeQuestion];

  const answers = [correct_answer, ...incorrect_answers];

  return (
    <QuestionsListContainer>
      <QuestionContainer>
        {he.decode(questions[activeQuestion].question)}
      </QuestionContainer>
      <AnswersContainer>
        {answers.map((answer) => (
          <Button
            disabled={selectedAnswer !== ""}
            className={
              selectedAnswer !== ""
                ? answer === correct_answer
                  ? "correct"
                  : ""
                : ""
            }
            key={answer}
            onClick={() => {
              dispatch({ type: "select", payload: answer });
              if (answer === correct_answer) {
                dispatch({
                  type: "updateScore",
                  payload: 1,
                });
              }
            }}
          >
            {he.decode(answer)}
          </Button>
        ))}
      </AnswersContainer>
      {activeQuestion === 14 ? (
        <Button onClick={() => dispatch({ type: "finish" })}>Finish</Button>
      ) : (
        <Button onClick={() => dispatch({ type: "nextQuestion" })}>Next</Button>
      )}
    </QuestionsListContainer>
  );
};

export default QuestionsList;
