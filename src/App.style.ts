import styled from "styled-components";
import { device } from "./styles/mediaBreakpoints";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
export const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  max-width: 600px;
  max-height: 100%;
  padding-top: 20px;

  @media ${device.sm} {
    width: 300px;
  }
`;
