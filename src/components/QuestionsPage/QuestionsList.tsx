import { FC, useMemo } from "react";
import useQuizContext from "../../hooks/useQuizContext";
import {
  AnswersButton,
  AnswersContainer,
  QuestionContainer,
  QuestionsListContainer,
} from "./QuestionsList.style";
import he from "he";
import { Button } from "../../ui/Button/Button";

const QuestionsList: FC = () => {
  const {
    questions = [],
    activeQuestion,
    dispatch,
    selectedAnswer,
  } = useQuizContext();

  const { correct_answer, incorrect_answers } = questions[activeQuestion];

  const shuffle = (array: string[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const shuffledAnswers = useMemo(
    () => shuffle([correct_answer, ...incorrect_answers]),
    [correct_answer, incorrect_answers]
  );

  if (questions === undefined) return null;

  return (
    <QuestionsListContainer>
      <QuestionContainer>
        {he.decode(questions[activeQuestion].question)}
      </QuestionContainer>
      <AnswersContainer>
        {shuffledAnswers.map((answer) => (
          <AnswersButton
            disabled={selectedAnswer !== ""}
            $status={
              !selectedAnswer
                ? undefined
                : answer === correct_answer
                ? "correct"
                : "incorrect"
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
          </AnswersButton>
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
