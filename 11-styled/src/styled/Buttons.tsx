import styled from "styled-components";

type ButtonProps = {
  bgColor?: string;
  color?: string;
};

export const Button = styled.button<ButtonProps>`
  background-color: ${(props) => props.bgColor || "black"};
  color: white;
  padding: 0.75rem;
  border-radius: 5px;
  border: 1px solid grey;
`;

export const SaveButton = styled(Button)`
  background-color: green;
`;
