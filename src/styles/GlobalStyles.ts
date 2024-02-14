import { createGlobalStyle } from "styled-components";
import { device } from "./mediaBreakpoints";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    margin-top: 5rem;

    @media ${device.lg} {
      margin: 3rem 0;
    }
    @media ${device.md} {
      margin: 2rem 0;
    }

    @media ${device.sm} {
      margin: 0.5rem 0;
    }

    background-image: url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    align-items: center;
    justify-content: center;
  }
  :root {
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-size: large;
  }
`;
