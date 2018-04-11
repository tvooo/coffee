import Head from "next/head";
import Link from "next/link";
import { ArrowLeft } from "react-feather";

import H from "../components/H";
import Page from "../components/Page";
import Button from "../components/Button";
import Menu from "../components/Menu";

import TextLink from "../components/Link";

import recipes from "../data/recipes";
import typography from "../design/type.json";

import Filter from "../svgs/chemex-filter.svg";

export default props => {
  const gear = recipes[props.url.query.gear];

  return (
    <Page active="equipment" title={gear.method}>
      <Link href="/equipment">
        <TextLink>
          <ArrowLeft /> Back to equipment
        </TextLink>
      </Link>
      <H>{gear.method}</H>
      <p className="jumbo">{gear.desc}</p>

      <div style={{ display: "flex", margin: "0 auto", maxWidth: "1200px" }}>
        <div style={{ marginRight: "2rem" }}>
          <gear.Image />
        </div>
        <div>
          <h2>Recipe</h2>
          <Link href={`/recipe?recipe=${gear.method.toLowerCase()}`}>
            <Button>Recipe</Button>
          </Link>
          {gear.recipe && <p>{gear.recipe.summary}</p>}

          <h3>Instructions</h3>
          <ol>
            {gear.recipe &&
              gear.recipe.instructions.map(i => <li>{i.type}</li>)}
          </ol>
        </div>
      </div>
      <style jsx>{`
        .jumbo {
          font-size: ${typography.sizes[3]};
        }

        ol {
          -webkit-font-feature-settings: "tnum";
          font-feature-settings: "tnum";
          font-variant-numeric: tabular-nums;
        }
      `}</style>
    </Page>
  );
};
