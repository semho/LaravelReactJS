import React from "react";
import { StyleInput } from "./InputStyled.styles";

type TType = "email" | "password" | "text" | "number";

interface IInputProps {
  className?: string;
  colorFocus: string;
  type: TType;
  name: string;
  id?: string;
  placeholder?: string;
  value?: string | number;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

export function InputStyled({
  onChange,
  className,
  colorFocus,
  name,
  id,
  placeholder,
  type,
  value,
  onKeyDown,
}: IInputProps) {
  return (
    <StyleInput
      onKeyDown={onKeyDown}
      onChange={onChange}
      value={value}
      type={type}
      name={name}
      id={id}
      placeholder={placeholder}
      colorFocus={colorFocus}
      className={`${className} form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:outline-none`}
    />
  );
}
