import React, { FC, useEffect, useState } from "react";
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
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const {
    questions = [],
    activeQuestion,
    dispatch,
    selectedAnswer,
  } = useQuizContext();
  console.log(questions);

  const { correct_answer, incorrect_answers } = questions[activeQuestion];

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  useEffect(() => {
    const answers = [correct_answer, ...incorrect_answers];
    setShuffledAnswers(shuffle(answers));
  }, [correct_answer, incorrect_answers]);

  if (questions === undefined) return null;
  console.log(selectedAnswer);

  return (
    <QuestionsListContainer>
      <QuestionContainer>
        {he.decode(questions[activeQuestion].question)}
      </QuestionContainer>
      <AnswersContainer>
        {shuffledAnswers.map((answer, index) => (
          <Button
            disabled={selectedAnswer !== ""}
            className={
              selectedAnswer !== ""
                ? answer === correct_answer
                  ? "correct"
                  : "incorrect"
                : ""
            }
            key={answer}
            onClick={() => {
              dispatch({ type: "select", payload: answer });
              console.log(answer);
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
        <Button
          onClick={() => dispatch({ type: "finish" })}
          disabled={!selectedAnswer}
        >
          Finish
        </Button>
      ) : (
        <Button
          disabled={!selectedAnswer}
          onClick={() => dispatch({ type: "nextQuestion" })}
        >
          Next
        </Button>
      )}
    </QuestionsListContainer>
  );
};

export default QuestionsList;
