import React, { FC } from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  children: any;
  onClick?: () => void;
}

export const Button: FC<ButtonProps> = ({ children, onClick }) => {
  return <ButtonContainer onClick={onClick}>{children}</ButtonContainer>;
};
