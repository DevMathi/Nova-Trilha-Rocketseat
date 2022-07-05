import { createGlobalStyle } from "styled-components"

export const GlobalStyled = createGlobalStyle`

    *{
        text-decoration: none;
        margin: 0;
        padding: 0;
        list-style: none;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }
    :root{
        --green-300: #00b37e;
        --green-500: #00875f;
        --gray-100: #e1e1e6;
        --gray-300: #c4c4cc;
        --gray-400: #8d8d99;
        --gray-600: #323238;
        --gray-700: #29292e;
        --gray-800: #202024;
        --gray-900: #121214;
        --white: #ffffff; 
        --red-500: #f75a68
    }
    :focus{
        outline: transparent;
        box-shadow: 0 0 0 2px var(--green-500);
    }

    html{
        @media (max-width: 1080px){
            font-size: 93.75%;
        }
        @media (max-width:720px){
            font-size: 87.5%;
        }
    }

    body{
        background-color: var(--gray-900);
        min-height: 100vh;
        color: var(--gray-300);
        font-family: "Roboto", sans-serif;
        -webkit-font-smoothing: antialiased;
    }

    #root{
        min-height: 100vh;
    }

    body,input, textarea, label,button{
        font-family: poppins, sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }
    button{
        background:none;
        border: none;
    }




`
