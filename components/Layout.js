import colors from "../design/colors.json";

const Layout = props => (
  <div className="Layout">
    {props.children}
    <style jsx global>{`
      @font-face {
        font-family: "sweden_sansregular";
        src: url("static/fonts/swedensans-webfont.eot");
        src: url("static/fonts/swedensans-webfont.eot?#iefix")
            format("embedded-opentype"),
          url("static/fonts/swedensans-webfont.woff2") format("woff2"),
          url("static/fonts/swedensans-webfont.woff") format("woff"),
          url("static/fonts/swedensans-webfont.ttf") format("truetype"),
          url("static/fonts/swedensans-webfont.svg#sweden_sansregular")
            format("svg");
        font-weight: normal;
        font-style: normal;
      }

      @font-face {
        font-family: "sweden_sansregular";
        src: url("static/fonts/swedensansbold-webfont.eot");
        src: url("static/fonts/swedensansbold-webfont.eot?#iefix")
            format("embedded-opentype"),
          url("static/fonts/swedensansbold-webfont.woff2") format("woff2"),
          url("static/fonts/swedensansbold-webfont.woff") format("woff"),
          url("static/fonts/swedensansbold-webfont.ttf") format("truetype"),
          url("static/fonts/swedensansbold-webfont.svg#sweden_sansregular")
            format("svg");
        font-weight: bold;
        font-style: normal;
      }

      body {
        margin: 0;
        padding: 2rem;
        padding: 0;
        background-color: #f4f4f4;
        background-color: ${colors.gray[0]};
        font-family: sweden_sansregular, sans-serif;
        color: ${colors.black};
      }

      button {
        font-family: sweden_sansregular, sans-serif;
      }

      .Layout {
        max-width: 1400px;
        margin: 0 auto;
      }
    `}</style>
  </div>
);

export default Layout;
