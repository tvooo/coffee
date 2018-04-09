import Head from "next/head";
import Link from "next/link";
import TextLink from "../components/Link";

import Paper from "../components/Paper";
import PropertyTable from "../components/PropertyTable";
import Layout from "../components/Layout";
import H from "../components/H";
import Header from "../components/Header";
import Button from "../components/Button";
import Menu from "../components/Menu";

import recipes from "../data/recipes.json";
import typography from "../design/type.json";

import remark from "remark";
import reactRenderer from "remark-react";

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

export default props => {
  const recipe = recipes[props.url.query.recipe];

  return (
    <div>
      <div style={{ background: "white", padding: "2rem 1rem 0 1rem" }}>
        <Layout>
          <Header />
          <Menu active="recipes" />
        </Layout>
      </div>
      <Layout>
        <Link href="/recipes">
          <TextLink>
            <ArrowLeft /> Back to recipes
          </TextLink>
        </Link>
        <div style={{ display: "flex", marginTop: "2rem" }}>
          <PropertyTable style={{ flex: "1 0 25%", minWidth: "200px" }}>
            <PropertyTable.Row label="By">
              {recipe.source}
              <br />({recipe.origin})
            </PropertyTable.Row>
            <PropertyTable.Row label="Method">
              {recipe.method}
            </PropertyTable.Row>
            <PropertyTable.Row label="Coffee">
              {recipe.coffee}
            </PropertyTable.Row>
            <PropertyTable.Row label="Water">{recipe.water}</PropertyTable.Row>
            {recipe.url && (
              <PropertyTable.Row label="Source">
                <a href={recipe.url}>Link</a>
              </PropertyTable.Row>
            )}
          </PropertyTable>

          <Paper style={{ flex: "1 1 auto", marginLeft: "2rem" }}>
            {recipe.vimeo && (
              <iframe
                src={`https://player.vimeo.com/video/${
                  recipe.vimeo
                }?color=ffffff`}
                width="800"
                height="450"
                frameborder="0"
                webkitallowfullscreen
                mozallowfullscreen
                allowfullscreen
                style={{ width: "100%" }}
              />
            )}
            {recipe.text && (
              <div>
                <H>Instructions</H>
                <Markdown>{recipe.text}</Markdown>
              </div>
            )}
          </Paper>
        </div>
      </Layout>
    </div>
  );
};
