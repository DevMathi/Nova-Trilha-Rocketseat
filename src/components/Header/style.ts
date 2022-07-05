import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: var(--gray-800);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 2rem;
  flex-flow: row-reverse;
  div{
    display: flex;
  }
  @media(min-width: 1023px){
    justify-content: center;
  }
`