import Head from "next/head";

import CardGrid from "../components/CardGrid";
import H from "../components/H";

import Page from "../components/Page";

import Chemex from "../svgs/chemex.svg";
import V60 from "../svgs/v60.svg";

import colors from "../design/colors.json";

import recipes from "../pages/recipes";

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

// const RecipeCard = ({ recipe, children }) => (
//   <Card
//     href={`/gear?gear=${recipe.method.toLowerCase()}`}
//     className="RecipeCard"
//   >
//     <div>
//       <Icon Comp={recipe.Icon} />
//       <h2>{recipe.method}</h2>
//       {recipe.recipe && (
//         <p className="Card__summary">{recipe.recipe.summary}</p>
//       )}
//     </div>
//     <style jsx>{`
//       .Card__summary {
//         color: gray;
//       }
//     `}</style>
//   </Card>
// );

export default recipes;

export const index = () => (
  <Page active="basics" title="Coffee Basics">
    {/* <H>Learn how to brew great coffee</H>
      <H>Brew methods</H>
      <H>Fika</H>
      <H>Påtår</H> */}
    {/* <p>
        Brewing
        Filter
        Bloom
        Drip
        Coffee
      </p> */}
    {/* <img src="https://instagram.com/p/BRfl4efgcLR/media/?size=m" />
      <img src="https://instagram.com/p/BO4akDwgpFw/media/?size=m" /> */}
    {/* <p>Grind. Rinse. Bloom. Brew. Repeat.</p> */}
    <H>Grind</H>
    Different brew styles and preferences require different grind sizes.
    <H>Water</H>
    <H>Method</H>
    <H>Ratio</H>
    <p>0.07:1 coffee to water</p>
    <H>Bloom</H>
  </Page>
);
