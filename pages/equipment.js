import Head from "next/head";

import Layout from "../components/Layout";
import Card from "../components/Card";
import H from "../components/H";
import Menu from "../components/Menu";
import Header from "../components/Header";

import Chemex from "../svgs/chemex.svg";
import V60 from "../svgs/v60.svg";

import colors from "../design/colors.json";
import recipes from "../data/recipes";

const allColors = [
  ...colors.teal,
  ...colors.cyan,
  ...colors.blue,
  ...colors.violet
];

const Bar = () => (
  <div>
    {allColors.map(c => (
      <div style={{ background: c, height: "10px", width: "10px" }} />
    ))}
  </div>
);

const Icon = ({ Comp }) => (
  <div className="Icon">
    <Comp width="40px" height="auto" />
    <style jsx>{`
      :global(#Chemex) {
        stroke-width: 4px;
      }
      :global(#Chemex) :global(#Handle) {
        stroke: black !important;
        fill: white !important;
      }
      .Icon {
        display: inline-block;
        height: 80px;
        width: 40px;
      }
    `}</style>
  </div>
);

const ChemexIcon = Icon(Chemex);
const V60Icon = Icon(V60);

const RecipeCard = ({ recipe, children }) => (
  <Card
    href={`/gear?gear=${recipe.method.toLowerCase()}`}
    className="RecipeCard"
  >
    <div>
      <Icon Comp={recipe.Icon} />
      <h2>{recipe.method}</h2>
      {recipe.recipe && (
        <p className="Card__summary">{recipe.recipe.summary}</p>
      )}
    </div>
    <style jsx>{`
      .Card__summary {
        color: gray;
      }
    `}</style>
  </Card>
);

export default () => (
  <div>
    <Head>
      <title>prototyping.☕️</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div style={{ background: "white", padding: "2rem 1rem 0 1rem" }}>
      <Layout>
        <Header />
        <Menu active="equipment" />
      </Layout>
    </div>
    <Layout>
      <H>Equipment</H>
      <p>Dripper, Grinder, Scale, Timer</p>

      <div className="cards">
        {Object.keys(recipes).map(recipe => (
          <RecipeCard key={recipe} recipe={recipes[recipe]} />
        ))}
      </div>
      <style jsx>{`
        .cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          align-items: stretch;
        }

        img {
          max-width: 100%;
        }
      `}</style>
    </Layout>
  </div>
);
