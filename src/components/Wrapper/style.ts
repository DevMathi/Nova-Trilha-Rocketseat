import styled from "styled-components";

export const WrapperStyle = styled.div`
  margin: 2rem auto;
  padding: 0 1rem;
  display: grid;
  gap: 2rem;
  align-items: flex-start;
  @media (min-width: 1023px){
    grid-template-columns: 256px 1fr;
    max-width: 70rem;
  }
`