import Link from "next/link";

import Page from "../components/Page";
import CardGrid from "../components/CardGrid";
import H from "../components/H";

import Chemex from "../svgs/chemex.svg";
import V60 from "../svgs/v60.svg";

import recipes from "../data/recipes";

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
  <Page active="equipment" title="Equipment">
    <H>Equipment</H>
    <p>Dripper, Grinder, Scale, Timer</p>

    <CardGrid>
      {Object.keys(recipes).map(recipe => (
        <Link href={`/gear?gear=${recipes[recipe].method.toLowerCase()}`}>
          <CardGrid.Card key={recipe} style={{ flex: "1 0 200px" }}>
            <Icon Comp={recipes[recipe].Icon} />
            <p>{recipes[recipe].method}</p>
          </CardGrid.Card>
        </Link>
      ))}
    </CardGrid>
  </Page>
);
