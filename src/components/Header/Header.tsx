import React, { FC } from "react";
import { HeaderContainer } from "./Header.style";

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  return (
    <HeaderContainer>
      🧠The Trivia Pursuit Quiz: Test Your Knowledge!
    </HeaderContainer>
  );
};

export default Header;
