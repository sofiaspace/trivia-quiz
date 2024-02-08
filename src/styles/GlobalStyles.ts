import { createGlobalStyle } from "styled-components";
import { device } from "./mediaBreakpoints";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  html,
  body {
    height: 100vh;
    margin: 0;
    padding: 0;

    background-image: url("https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D");
    background-size: cover;
    background-position: center;
    background-attachment: fixed;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  :root {
    padding-top: 40px;
    overflow: hidden;
    font-family: "Poppins", sans-serif;
    color: white;
    font-weight: 500;
    font-style: normal;
    font-size: large;

    /* display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center; */

    /* @media ${device.md} {
      padding: 50px 5px;
    }

    @media ${device.xs} {
      font-size: 10px;
      /* padding: 50px 5px; */
  }
`;
