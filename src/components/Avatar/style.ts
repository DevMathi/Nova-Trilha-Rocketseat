import styled, { createGlobalStyle } from "styled-components";

export const AvatarStyle = createGlobalStyle`
  .avatar{
    width: calc(3rem + 12px);
    height:  calc(3rem + 12px);
    border-radius: 8px;
  } 
  .avatar-border{
    width: calc(3rem + 12px);
    height:  calc(3rem + 12px);
    border-radius: 8px;
    border: 4px solid var(--gray-800);
    outline: 2px solid var(--green-500);
  }
    
`