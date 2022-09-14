import styled from "styled-components";

export const StyleItem = styled.li`
  & a button {
    padding-left: 0.75rem;
    padding-right: 0.75rem;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    border-radius: 0.375rem;
  }

  & a.active button {
    background-color: #4f46e5;
    color: white;
  }

  & a:hover button {
    background-color: #818cf8;
    color: white;
  }
`;
