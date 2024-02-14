import styled, { css } from "styled-components";
import { Button } from "../../ui/Button/Button";

export const QuestionsListContainer = styled.div``;

export const QuestionContainer = styled.div`
  text-align: left;
`;
export const AnswersContainer = styled.div`
  text-align-last: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px 0;
`;

export const AnswersButton = styled(Button)<{
  $status?: "correct" | "incorrect";
}>`
  &:disabled {
    ${({ $status }) =>
      $status === "correct" &&
      css`
        background-color: green;
      `}
  }

  &:disabled {
    ${({ $status }) =>
      $status === "incorrect" &&
      css`
        background-color: red;
      `};
  }
`;
