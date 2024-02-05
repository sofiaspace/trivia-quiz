import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };
export const GlobalStyles = styled.createGlobalStyle`
  :root {
    height: 100vh;
    background: linear-gradient(
      to left top,
      #b40fb6,
      #591aa4 50% 40%,
      #16aa96 90% 50%
    );

    font-family: "Poppins", sans-serif;
    font-weight: 500;
    font-style: normal;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;
