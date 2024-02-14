import { FC, PropsWithChildren } from "react";
import { ButtonContainer } from "./Button.style";

interface ButtonProps extends PropsWithChildren {
  onClick?: () => void;
  className?: string;
  disabled?: boolean;
  type?: "button";
}

export const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className,
  disabled,
  type,
}) => {
  return (
    <ButtonContainer
      className={className}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </ButtonContainer>
  );
};
