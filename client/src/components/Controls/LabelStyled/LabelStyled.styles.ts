import styled from "styled-components";

export const StyleLabel = styled.label<{ colorText?: string }>`
  color: ${({ colorText }) => (colorText ? `var(--${colorText})` : "grey")};
  cursor: pointer;
`;
