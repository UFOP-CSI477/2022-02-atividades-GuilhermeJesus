import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`

  h1{
    color:d8e6f4;
  }

  *{
    margin: 0;
    padding: 0;
    font-family: 'poppins', sans-serif;
  }
  
  body {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    background-color: #d8e6f4;
  }
`;

export default Global;