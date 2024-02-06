import React, { FC } from "react";
import useQuizContext from "../../hooks/useQuizContext";
import {
  AnswersContainer,
  QuestionContainer,
  QuestionsListContainer,
} from "./QuestionsList.style";
import he from "he";

interface QuestionsListProps {}

const QuestionsList: FC<QuestionsListProps> = () => {
  const { questions = [], activeQuestion } = useQuizContext();
  console.log(questions);

  // const { correct_answer, incorrect_answers } = questions;

  // const answers = [correct_answer, ...incorrect_answers];

  return (
    // <QuestionsListContainer
    //   dangerouslySetInnerHTML={{ __html: questions[1].question }}
    // />
    <QuestionsListContainer>
      <QuestionContainer>
        {he.decode(questions[activeQuestion].question)}
      </QuestionContainer>
      <AnswersContainer>
        {questions[activeQuestion].correct_answer}
      </AnswersContainer>
    </QuestionsListContainer>
  );
};

export default QuestionsList;
