import styled from "styled-components";

import typography from "../design/type.json";
import colors from "../design/colors.json";
import LogoSvg from "../svgs/logo.svg";
import LogoSimpleSvg from "../svgs/logo-simple.svg";
import Link from "next/link";

const LogoType = styled.h2`
  font-size: ${typography.sizes[1]};
  color: black;
  border-bottom: 3px solid transparent;
  margin: 0 0 0 0.5em;
  padding: 0;
  padding-top: 1rem;
`;

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;

  flex-direction: ${p => (p.small ? "row" : "column")};
  ${p =>
    p.small
      ? `
    justify-content: center;
    align-items: flex-end;
  `
      : `
    align-items: center;
  `} &:hover h2 {
    border-color: black;
  }
`;

export const SmallLogo = () => (
  <Link href="/">
    <LogoContainer small>
      <LogoSimpleSvg /> <LogoType>prototyping.coffee</LogoType>
    </LogoContainer>
  </Link>
);

export default () => (
  <Link href="/">
    <LogoContainer>
      <LogoSvg /> <LogoType>prototyping.coffee</LogoType>
    </LogoContainer>
  </Link>
);
