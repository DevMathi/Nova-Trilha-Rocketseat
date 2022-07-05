import styled from "styled-components";

export const SideBarStyle = styled.aside`
  background-color: var(--gray-800);
  border-radius: 8px;
  overflow: hidden;
  .cover{
    width: 100%;
    height: 4.5rem;
    object-fit: cover;
  }
  .profile{
    display: flex;
    flex-flow: column;
    align-items: center;
    margin-top: calc(0px - 1.5rem - 6px);
    .avatar{
      width: calc(3rem + 12px);
      height:  calc(3rem + 12px);
      border-radius: 8px;
      border: 4px solid var(--gray-800);
      outline: 2px solid var(--green-500);
    }
    strong{
      margin-top: 1rem;
      color: var(--gray-100);
      line-height: 1.6;
    }
    span{
      font-size: 0.875rem;
      color: var(--gray-400);
      line-height: 1.6;
    }
  }
  footer{
    border-top: 1px solid var(--gray-600);
    margin-top: 1.5rem;
    padding: 1.5rem 2rem 2rem;
    a{
      background-color: transparent;
      color: var(--green-500);
      text-decoration: underline;
      border: 1px solid var(--green-500);
      border-radius: 8px;
      height: 50px;
      padding: 0 1.5rem;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      transition: all 0.1s linear;
      &:hover{
        background-color: var(--green-500);
        color: var(--white);
        path{
          stroke: white;
        }
      }
      
    }
  }
`