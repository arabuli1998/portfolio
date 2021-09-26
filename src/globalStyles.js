import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    pad: 0;
    box-sizing: border-box;
    font-family: 'Courier New', Courier, monospace;
}
-ms-hyphenate-limit-chars, body{
    overflow-x:hidden;
}
`;
export default GlobalStyle;
