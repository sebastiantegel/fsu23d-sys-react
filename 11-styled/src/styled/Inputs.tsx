import styled from "styled-components";

export const Input = styled.input.attrs(() => ({
  type: "text",
}))`
  padding: 0.5rem;
  margin: 0.5rem;
`;

export const Password = styled(Input).attrs(() => ({
  type: "password",
}))``;
