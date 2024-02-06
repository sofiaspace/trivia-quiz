import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const HeaderContainer = styled.header`
  font-family: "Permanent Marker", cursive;
  font-weight: 400;
  font-size: 50px;
  position: fixed;
  top: 200px;

  @media ${device.lg} {
    font-size: 40px;
    position: fixed;
    top: 8rem;
  }
  @media ${device.md} {
    position: fixed;
    top: 6rem;
  }
  @media ${device.sm} {
    position: fixed;
    top: 2rem;
  }
`;
