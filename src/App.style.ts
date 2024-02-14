import styled from "styled-components";
import { device } from "./styles/mediaBreakpoints";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;
export const PagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 600px;
  padding: 20px;

  /* @media ${device.lg} {
    width: 500px;
  } */
  /* @media ${device.md} {
    width: 300px;
  } */

  @media ${device.sm} {
    width: 350px;
  }
`;
