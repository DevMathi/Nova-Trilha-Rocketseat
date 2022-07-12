import styled from "styled-components";

export const CommentStyle = styled.div`
  margin-top: 1.5rem;
  display: flex;
  gap: 1rem;
  img{
    width: 3rem;
    height: 3rem;
    border-radius: 8px;
  }
  .comment-box{
    flex: 1;
    .comment-content{
      background-color: var(--gray-700);
      border-radius: 8px;
      padding: 1rem;
      p{
        margin-top: 1rem;
        color: var(--gray-300);
      }
      header{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        .author-and-time{
          display: flex;
          flex-flow: column;
        }
        strong{
          font-size: 0.875rem;
          line-height:1.6;
        }
        time{
          font-size:0.75rem;
          line-height: 1.6;
          color: var(--gray-400);
        }
        button{
          background-color: transparent;
          border: 0;
          cursor: pointer;
          line-height: 0;
          border-radius: 2px;
          path{
            transition: all 0.5s;
          }
          &:hover{
            path{
              stroke: var(--red-500);
            }
            
          }
        }
      }
    } 
    footer{
        margin-top: 1rem;
        button{
          background-color: transparent;
          border: 0;
          cursor: pointer;
          display: flex;
          align-items: center;
          transition: all 0.5s ;
          color: var(--gray-400);
          svg{
            margin-right: 0.5rem;
          }
          path{
            transition: fill 0.5s ;
          }
          span::after{
            padding: 0 0.2rem;
          }
          &:hover{
            path{
              fill: var(--green-300);
            }
            color: var(--green-300);
          }
        }
      }
  }
`