import styled from "styled-components";

export const PostStyle = styled.article`
  background-color: var(--gray-800);
  border-radius: 8px;
  padding: 2.5rem;
  & + & {
    margin-top: 2rem;
  }
  .content{
    line-height: 1.6;
    color: var(--gray-300);
    margin-top: 1.5rem;
    p{
      margin-top: 1rem;
    }
    a{
      color:var(--green-500) ;
      font-weight: bold;
      transition: color 0.2s;
      &:hover{
        color: var(--green-300);
      }
    }
  }
  .comment-form{
    width: 100%;
    margin-top: 1.5rem;
    padding-top: 1.5rem;
    border-top: 1px solid var(--gray-600);
    strong{
      line-height: 1.6;
      color: var(--gray-100);
    }
    textarea{
      width: 100%;
      background-color: var(--gray-900);
      border: 0;
      resize: none;
      height: 6rem;
      padding: 1rem;
      border-radius: 8px;
      color: var(--gray-100);
      line-height: 1.4;
      margin-top: 1rem;
    }
    footer{
      visibility: hidden;
      max-height: 0;
      button{
        padding: 1rem 1.5rem;
        margin-top: 1rem;
        border-radius: 8px;
        border: 0;
        background-color: var(--green-500);
        color: var(--white);
        font-weight: bold;
        cursor: pointer;
        transition: background-color 0.1s ;
        &:hover{
          background-color: var(--green-300);
        }
        &:focus{
          box-shadow: 0 0 0 2px red;
        }
      } 
    }
    &:focus-within{
      footer{
        visibility: visible;
        max-height: none;
      }
    }
  }
  & > header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    time{
      font-size: 0.875rem;
      color: var(--gray-400);

    }
    .author{
      display: flex;
      align-items: center;
      gap: 1rem;
      img{
        width: calc(3rem + 12px);
        height: calc(3rem + 12px);
        border-radius: 8px;
        border: 4px solid var(--gray-800);
        outline: 2px solid var(--green-500);
      }
      .author-info{
        display: flex;
        flex-flow: column;
        strong{
          color: var(--gray-100);
          line-height: 1.6;
        }
        span{
          font-size: 0.875rem;
          color: var(--gray-400);
          line-height: 1.6;
        }
        
      }
    }
  }
  .comment-list{
    margin-top: 2rem;
    
  }
`
