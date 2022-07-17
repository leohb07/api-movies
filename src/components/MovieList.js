import styled from "styled-components";

export const MovieList = styled.ul`
  margin-top: 2.8rem;
  list-style: none;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  column-gap: 3rem;
  row-gap: 4rem;
`