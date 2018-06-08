import Head from "next/head";
import Link from "next/link";
import { withRouter } from "next/router";
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
import { getMethodName } from "../utils/methods.js";

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

const ButtonLink = Button.withComponent("a");

export default withRouter(props => {
  const recipe = recipes[props.router.query.recipe];

  return (
    <Page active="recipes" title={recipe.method}>
      <H style={{ textAlign: "left" }}>
        {recipe.source} &mdash; {getMethodName(recipe.method)}
      </H>
      <Link href="/recipes">
        <ButtonLink>
          <ArrowLeft /> Back to recipes
        </ButtonLink>
      </Link>
      <div
        style={{ display: "flex", marginTop: "2rem", alignItems: "flex-start" }}
      >
        <PropertyTable style={{ flex: "1 0 35%", minWidth: "300px" }}>
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
        )}
        {recipe.youtube && (
          <div style={{ flex: "1 0 auto", marginLeft: "2rem" }}>
            <AspectRatioBox>
              <ResponsiveVideoPlayer
                url={`https://www.youtube.com/watch?v=${recipe.youtube}`}
              />
            </AspectRatioBox>
          </div>
        )}
        {recipe.text && (
          <Paper
            style={{
              flex: "1 1 auto",
              marginLeft: "2rem",
              borderRadius: "0.2rem"
            }}
          >
            <H>Instructions</H>
            <Markdown>{recipe.text}</Markdown>
          </Paper>
        )}
      </div>
    </Page>
  );
});
