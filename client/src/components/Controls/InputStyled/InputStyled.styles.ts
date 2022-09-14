import styled from "styled-components";

export const StyleInput = styled.input<{ colorFocus: string }>`
  &:focus {
    border-color: ${({ colorFocus }) =>
      colorFocus ? `var(--${colorFocus})` : "grey"};
  }
`;
