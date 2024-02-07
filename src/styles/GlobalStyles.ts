import { createGlobalStyle } from "styled-components";
import { device } from "./mediaBreakpoints";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  :root {
    height: 100%;
    /* background-image: linear-gradient(
      to left top,
      #423f3b 10%,
      #000000 40%,
      #423f3b 30% 40%
    ); */
    background-image: url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;

    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 500;
    font-style: normal;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    /* @media ${device.md} {
      padding: 50px 5px;
    }

    @media ${device.xs} {
      font-size: 10px;
      /* padding: 50px 5px; */
  }
`;
