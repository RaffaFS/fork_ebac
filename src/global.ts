import { createGlobalStyle, TemaPadrao } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
        --cor-principal: #a7727d;
        --cor-secundaria: #f9f5e7;
    }

  * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Lato, sans-serif;
        list-style: none;
    }

    body {
        padding-bottom: 120px;
    }
`;

export const Tema: TemaPadrao = {
    colors: {
        primary: "#a7727d",
        secondary: "#f9f5e7",
    },
    container: {
        maxWidth: "1024px",
        responsiveWidth: "80%",
    }
};