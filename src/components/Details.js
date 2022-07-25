import styled from "styled-components";

export const Container = styled.div`
  padding: 5rem 0;
  
  .movie {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  img {
    width: 300px;
    border-radius: 1rem;
  }

  .details {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin-left: 4rem;
    max-width: 45%;
  }

  h2 {
    margin: 2rem 0;
  }

  span {
    line-height: 140%;
    margin-bottom: 1.2rem;
  }

  .dateSpan {
    opacity: .7;
  }

  button {
    background-color: #BB2222;
    border: none;
    cursor: pointer;
    border-radius: 1rem;
    color: white;
    padding: .8rem 2rem;
    margin-top: 1rem;
    font-size: 100%;
    transition: all .3s;
  }

  button:hover {
    background-color: #AA0020;
  }

  @media (max-width: 767px){
    padding: .8rem 0;    
  }

  @media (max-width: 1023px) {
    padding: .2rem 0;

    .movie {
      flex-direction: column;
    }

    .details {
      align-items: center;
      margin-left: 0;
      max-width: 100%;
    }
  }
`