import React, { FC } from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps {
  children: any;
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
}) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </ButtonContainer>
  );
};
