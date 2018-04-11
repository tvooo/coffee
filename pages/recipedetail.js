import Head from "next/head";
import Link from "next/link";
import styled from "styled-components";
import TextLink from "../components/Link";

import Paper from "../components/Paper";
import Page from "../components/Page";
import PropertyTable from "../components/PropertyTable";
import Layout from "../components/Layout";
import H from "../components/H";

import Button from "../components/Button";
import Menu from "../components/Menu";

import recipes from "../data/recipes.json";
import typography from "../design/type.json";

import remark from "remark";
import reactRenderer from "remark-react";
import ReactPlayer from "react-player";
import { ArrowLeft } from "react-feather";

import Filter from "../svgs/chemex-filter.svg";

const Markdown = ({ children, ...rest }) => (
  <div {...rest}>
    {
      remark()
        .use(reactRenderer)
        .processSync(children).contents
    }
  </div>
);

<div className="player-wrapper">
  <ReactPlayer
    className="react-player"
    url="https://www.youtube.com/watch?v=ysz5S6PUM-U"
    width="100%"
    height="100%"
  />
</div>;

const AspectRatioBox = styled.div`
  position: relative;
  padding-top: 56.25%; /* Player ratio: 100 / (1280 / 720) */
`;

const ResponsiveVideoPlayer = styled(ReactPlayer).attrs({
  width: "100%",
  height: "100%"
})`
  position: absolute;
  top: 0;
  left: 0;
`;

export default props => {
  const recipe = recipes[props.url.query.recipe];

  return (
    <Page active="recipes" title={recipe.method}>
      <Link href="/recipes">
        <TextLink>
          <ArrowLeft /> Back to recipes
        </TextLink>
      </Link>
      <div
        style={{ display: "flex", marginTop: "2rem", alignItems: "flex-start" }}
      >
        <PropertyTable style={{ flex: "1 0 25%", minWidth: "200px" }}>
          <PropertyTable.Row label="By">
            {recipe.source}
            <br />({recipe.origin})
          </PropertyTable.Row>
          <PropertyTable.Row label="Method">{recipe.method}</PropertyTable.Row>
          <PropertyTable.Row label="Coffee">{recipe.coffee}</PropertyTable.Row>
          <PropertyTable.Row label="Water">{recipe.water}</PropertyTable.Row>
          {recipe.url && (
            <PropertyTable.Row label="Source">
              <a href={recipe.url}>Link</a>
            </PropertyTable.Row>
          )}
        </PropertyTable>
        {recipe.vimeo && (
          <div style={{ flex: "1 0 auto", marginLeft: "2rem" }}>
            <AspectRatioBox>
              <ResponsiveVideoPlayer
                url={`https://player.vimeo.com/video/${recipe.vimeo}`}
              />
            </AspectRatioBox>
          </div>
          // <iframe
          //   src={`https://player.vimeo.com/video/${recipe.vimeo}?color=ffffff`}
          //   width="800"
          //   height="450"
          //   frameborder="0"
          //   webkitallowfullscreen
          //   mozallowfullscreen
          //   allowfullscreen
          //   style={{ width: "100%" }}
          // />
        )}
        {recipe.text && (
          <Paper style={{ flex: "1 1 auto", marginLeft: "2rem" }}>
            <H>Instructions</H>
            <Markdown>{recipe.text}</Markdown>
          </Paper>
        )}
      </div>
    </Page>
  );
};
