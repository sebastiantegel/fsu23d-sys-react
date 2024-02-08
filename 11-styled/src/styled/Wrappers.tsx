import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 1rem;
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
  width: 100%;
`;

export const ColumnWrapper = styled(Wrapper)`
  flex-direction: column;
`;
