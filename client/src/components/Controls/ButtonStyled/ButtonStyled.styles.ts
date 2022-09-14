import styled from "styled-components";

export const StyleButton = styled.button<{ variant: string }>`
  background-color: ${({ variant }) =>
    variant ? `var(--${variant})` : "grey"};

  &:hover {
    background-color: ${({ variant }) =>
      variant ? `var(--${variant}-hover)` : "grey"};
  }
`;
