import React from "react";
import { StyleLabel } from "./LabelStyled.styles";

interface IInputProps {
  textColor?: string;
  title: string;
  forId: string;
  className?: string;
}

export function LabelStyled({
  textColor,
  title,
  forId,
  className,
}: IInputProps) {
  return (
    <StyleLabel
      colorText={textColor}
      htmlFor={forId}
      className={`form-label inline-block mb-2 ${className} `}
    >
      {title}
    </StyleLabel>
  );
}
