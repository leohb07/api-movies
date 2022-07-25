import styled from "styled-components";

export const MovieList = styled.ul`
  padding: 3rem 0;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));

  width: 50%;
  margin: 0 auto;
  column-gap: 3rem;
  row-gap: 4rem;

  @media (max-width: 1023px) {
    width: 100%;
  }
`