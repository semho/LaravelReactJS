import React from "react";
import { StyleButton } from "./ButtonStyled.styles";

type TType = "submit" | "button";

interface IButtonProps {
  title: string;
  variant: string;
  className?: string;
  type: TType;
  disabled: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
}

export function ButtonStyled({
  title,
  variant,
  className,
  type,
  disabled,
  onClick,
}: IButtonProps) {
  return (
    <StyleButton
      type={type}
      variant={variant}
      disabled={disabled}
      onClick={onClick}
      className={`${className} shadow focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded`}
    >
      {title}
    </StyleButton>
  );
}
