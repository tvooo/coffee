import { createGlobalStyle } from 'styled-components';
import { withPrefix } from 'gatsby';
import colors from '../design/colors.json';
import fonts from '../design/fonts.json';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: "sweden_sansregular";
    src: url("${withPrefix('/fonts/swedensans-webfont.eot')}");
    src: url("${withPrefix('/fonts/swedensans-webfont.eot?#iefix')}")
        format("embedded-opentype"),
      url("${withPrefix('/fonts/swedensans-webfont.woff2')}") format("woff2"),
      url("${withPrefix('/fonts/swedensans-webfont.woff')}") format("woff"),
      url("${withPrefix('/fonts/swedensans-webfont.ttf')}") format("truetype"),
      url("${withPrefix('/fonts/swedensans-webfont.svg#sweden_sansregular')}")
        format("svg");
    font-weight: normal;
    font-style: normal;
    font-display: fallback;
  }

  @font-face {
    font-family: "sweden_sansregular";
    src: url("${withPrefix('/fonts/swedensansbold-webfont.eot')}");
    src: url("${withPrefix('/fonts/swedensansbold-webfont.eot?#iefix')}")
        format("embedded-opentype"),
      url("${withPrefix(
        '/fonts/swedensansbold-webfont.woff2'
      )}") format("woff2"),
      url("${withPrefix('/fonts/swedensansbold-webfont.woff')}") format("woff"),
      url("${withPrefix(
        '/fonts/swedensansbold-webfont.ttf'
      )}") format("truetype"),
      url("${withPrefix(
        '/fonts/swedensansbold-webfont.svg#sweden_sansregular'
      )}")
        format("svg");
    font-weight: bold;
    font-style: normal;
    font-display: fallback;
  }

  body {
    margin: 0;
    padding: 2rem;
    padding: 0;
    background-color: #f4f4f4;
    background-color: ${colors.gray[0]};
    color: ${colors.black};
  }

  button {
    font-family: ${fonts.default};
  }
`;

export default GlobalStyle;
