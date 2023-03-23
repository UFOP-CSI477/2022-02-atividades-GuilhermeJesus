import {createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`

    *{
        margin: 0px;
        padding: 0px;
        font-family: 'Roboto Mono', sans-serif;
        background-color: light-gray;
    }

    body{
        width: 100vw;
        height: 100vh;
        diplay: flex;
        justify-content: center;
    }
`;

export default Global;