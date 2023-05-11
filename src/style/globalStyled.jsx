import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    /* http://meyerweb.com/eric/tools/css/reset/ 
   v2.0 | 20110126
   License: none (public domain)
*/

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
    font-family: 'Roboto', sans-serif;
    color: #004c50
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

a{
    text-decoration: none;
    color: var(--gray-5);
}
//    border-color: #c57522;
 :root{
    --gray-1: #F9FAFB;
    --gray-2: #E5E7EB;
    --gray-3: #D1D5DB;
    --gray-4: #6B7280;
    --gray-5: #1F2937;
    --gray-6: rgba(0,0,0,0.4);
    --color-primary: #2a9d8f;
    --color-primary-50: #a2d2ff;
    --color-primary-25: #bde0fe;
    --color-secondary: #facc15;
    --white: #FFFFFF;
    --radius-4: 4px;
    --radius-6: 6px;
    --radius-8: 8px;
    --radius-10: 10px;
    --radius-20: 20px;
    --rem-08: 0.8rem;
    --rem-09: 0.9rem;
    --rem-11: 1.1rem;
    --rem-16: 1.6rem;
 }
`;
