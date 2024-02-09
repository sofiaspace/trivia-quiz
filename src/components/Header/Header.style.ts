import styled from "styled-components";
import { device } from "../../styles/mediaBreakpoints";

export const HeaderContainer = styled.header`
  font-family: "Holtwood One SC", serif;
  color: white;
  font-weight: 400;
  font-style: normal;
  font-size: 40px;

  margin: 20px;

  @media ${device.xs} {
    font-size: 30px;
  }
`;
