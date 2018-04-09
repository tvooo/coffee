import typography from "../design/type.json";
import colors from "../design/colors.json";
import LogoSvg from "../svgs/logo.svg";
import Link from "next/link";

export default () => (
  <div className="Logo">
    <Link href="/">
      <div className="Link">
        <LogoSvg /> <h2>prototyping.coffee</h2>
      </div>
    </Link>
    <style jsx>{`
      .Logo {
      }

      h2 {
        font-size: ${typography.sizes[1]};
        color: black;
        border-bottom: 3px solid transparent;
      }

      .Link {
        cursor: pointer;
        display: flex;
        align-items: center;
        flex-direction: column;
      }

      .Link:hover h2 {
        border-color: black;
      }
    `}</style>
  </div>
);
