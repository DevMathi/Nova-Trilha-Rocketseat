import  { createGlobalStyle } from "styled-components";

export const MenuStyle = createGlobalStyle`
  .open{
    background-color: var(--gray-600);
    transform: translateX(0);
    transition: transform 1s;
    position: fixed;
    height: 100%;
    width: 70%;
    z-index: 100;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: column;
    padding: 1rem;
    .button-close{
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
    }
  }
  .closed{
    background-color: var(--gray-600);
    display: flex;
    flex-flow: column;
    position: fixed;
    height: 100%;
    width: 70%;
    z-index: 100;
    left: 0;
    bottom: 0;
    transform: translateX(-101%);
    transition: transform 1s ;
    padding: 1rem;
    .button-close{
      display: flex;
      justify-content: flex-end;
      padding: 1rem;
    }
  }
`