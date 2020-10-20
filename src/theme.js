import React from 'react'
import { createGlobalStyle } from 'styled-components'

export const theme = {
    primary: '#09d3ac',
    dark: '#081229',
    lightDark: '#191d3a',
    black: '#111',
    white: '#fff'
}

export const Reset = createGlobalStyle`
html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video {
	margin: 0;
	padding: 0;
	border: 0;
	font-size: 100%;
	font: inherit;
	vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section {
	display: block;
}
body {
	line-height: 1;
}
ol, ul {
	list-style: none;
}
blockquote, q {
	quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
	content: '';
	content: none;
}
table {
	border-collapse: collapse;
	border-spacing: 0;
}
`

export const GlobalStyle = createGlobalStyle`
/**
 * Import font from google font
 */
@import url("https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;400;700&family=Roboto:wght@100;400;700&display=swap");

/**
 * Global Css
 */

html {
    font-size: 10px;
}

body {
    background-color: ${props => props.theme.dark};
    color: ${props => props.theme.white};
    margin: 0;
    font-family: "Noto Sans TC", "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
}

/**
 * Margin
 */

 .m{
     /**
      * margin top
      */
    &t{
        &-5{
            margin-top: 5rem;
        }

        &-10{
            margin-top: 10rem;
        }
    }
 }

/**
 * Header Css
 */

h2 {
    font-size: 3rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
}

/**
 * Text Css
 */

p {
    font-size: 1.6rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    line-height: 1.5em;
    letter-spacing: 0.04em;
}

a {
    color: ${props => props.theme.white};
    text-decoration: none;
    font-size: 1.6rem;
    font-weight: 400;
    cursor: pointer;
    transition: color 0.3s;

    &:hover {
        color: ${props => props.theme.primary};
        transition: color 0.3s;
    }
}

label {
    font-size: 1.6rem;
}
`