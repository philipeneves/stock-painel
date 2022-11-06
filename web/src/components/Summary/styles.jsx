import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2;
  margin-top: 16px;
  width: 60rem;

  div {
    background: var(--background-2);
    color: var(--text-grey);
    margin: 0 0.5rem;
    border-radius: 0.5rem;
    padding: 1rem;


    -webkit-box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3); 
    box-shadow: 1px 1px 10px 0.5px rgba(0,0,0,0.3);

    header {
      display: flex;
      flex-direction: column;

      strong {
        font-size: 1rem;
        font-weight: 600;
        color: var(--text-green);
      }

      p {
        font-size: 0.8rem;
        color: var(--text-grey);
        text-align: right;
      }
    }

    h1 {
      font-size: 1rem;
      font-weight: 500;
      margin-right: 8px;
      margin-top: 16px;
    }

    h2 {
      font-size: 1.2rem;
      font-weight: 600;
      margin: 0px;
      line-height: 1.2rem;
    }

    .name {
      margin-top: 16px;
      margin-bottom: 8px;
    }

    h3 {
      font-size: 1rem;
      font-weight: 500;
      display: flex;
    }

    input {
      width: 50%;
      padding: 0 0.5rem;
      height: 2rem;
      border-radius: 0.25rem;
      margin-right: 8px;
      border: 1px solid #d7d7d7;
      background: #e7e7ee;

      font-weight: 400;
      font-size: 0.8rem;

      &::placeholder {
        color: var(--text-black);
      }
    }

    button {
      position: relative;
      background: var(--background-button);
      padding: 0.5rem;
      border: none;
      border-radius: 0.25rem;
      width: 36px;
      height: 36px;
      transition: filter 0.7s ease-in;
      
      &:hover {
        filter: brightness(0.9);
      }
      
      img {
        width: 16px;
        height: 16px;
      }
    }

    .active {
      display: none;
    }
    
    .button-filter {
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--text-green);
      margin-left: 1rem;;
      background: var(--background-2);
      width: auto;
      padding: 0%;
      
      img {
        width: 20px;
        height: 20px;
      }
    }
  }`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 0 0.8rem;

  div {
    background-color: var(--background-3);
    border-radius: 0.25rem;
    margin: 16px 5px;
    display: flex;
    justify-content: center;
    width: 100%;
    box-shadow: none;
  }
  

  ul {
    padding: 0.2rem;
    font-size: 0.7rem;
    font-weight: 600;
    
    li {
      color: rgba(0, 0, 0, 0.5);
      list-style: none;
      margin: 1rem 1.5rem;
    }

    & .prices {
        color: var(--text-green);
      }
  }   
`;

export const Row = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 16px;

  div:first-child {
    margin-right: 8px;
  }
`;