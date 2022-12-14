import styled from 'styled-components'

export const Container = styled.form`
  div {
    display: flex;
    flex-direction: column;
  }

  row {
    flex-direction: row;
  }

  label {
    display: inline-block;
    font-size: 0.8rem;
    font-weight: 400;
    margin-top: 0.8rem;
  }

  input {
    width: 100%;
    padding: 0 0.5rem;
    height: 2rem;
    border-radius: 0.25rem;

    border: 1px solid #d7d7d7;
    background: #e7e7ee;

    font-weight: 400;
    font-size: 0.8rem;

    &::placeholder {
      color: var(--text-black);
    }
  }
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  div {
    width: 48%;
  }
`;