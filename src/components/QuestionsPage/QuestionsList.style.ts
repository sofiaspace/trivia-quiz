import styled, { css } from "styled-components";
import { Button } from "../../ui/Button/Button";
import { device } from "../../styles/mediaBreakpoints";

export const QuestionsListContainer = styled.div``;

export const QuestionContainer = styled.div`
  text-align: left;
  padding-top: 10px;
  width: 600px;

  @media ${device.md} {
    width: 500px;
  }

  @media ${device.sm} {
    width: 100%;
  }

  @media ${device.xs} {
    width: 100%;
  }
`;
export const AnswersContainer = styled.div`
  text-align-last: left;
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin: 10px 0;
  padding-bottom: 10px;
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
