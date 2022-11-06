import styled from "styled-components"

export const Container = styled.header`
  background: var(--background-1);
  max-width: 100%;
  padding: 16px;

  display: flex;
  flex-direction: row;
  justify-content: space-between;

  h1 {
    color: var(--text-light);
    font-size: 1.5rem;
    height: 1.5rem;
    line-height: 1.5rem;
    justify-content: center;
  }
`;