import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const QuestionsListContainer = styled.div``;

export const QuestionContainer = styled.div`
  text-align: left;
`;
export const AnswersContainer = styled.div`
  text-align-last: left;
  display: flex;
  flex-direction: column;
  width: 600px;

  @media ${device.md} {
    width: 400px;
  }

  @media ${device.sm} {
    width: 300px;
  }
`;
