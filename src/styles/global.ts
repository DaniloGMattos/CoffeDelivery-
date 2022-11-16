import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 2px ${({ theme }) => theme["purple-dark"]};
    }



    body {
        background:${({ theme }) => theme["white"]};
        color:${({ theme }) => theme["base-text"]};
        -webkit-font-smoothing:antialiased;
    }
    
    body, input, textarea, button {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size:1rem;
    }
    p,span{
        color:${({ theme }) => theme["base-subtitle"]};
    }
    h1,h2,h3,h4,h5,h6 {
        color:${({ theme }) => theme["base-title"]};

        font-family: 'Baloo 2', cursive;
    }
    button {
    background: none;
    border: none;
    :hover {
      cursor: pointer;
    }
  }



`;
