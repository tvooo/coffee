import Head from 'next/head';
import Link from 'next/link';
import Layout from '../components/Layout';
import Card from '../components/Card';
import H from '../components/H';

import Chemex from '../svgs/chemex.svg';
import V60 from '../svgs/v60.svg';

import colors from '../design/colors.json';
import recipes from '../data/recipes';

const Icon = ({Comp}) => (
  <div className="Icon">
    <Comp width="40px" height="auto" />
    <style jsx>{`
      :global(#Chemex) { stroke-width: 4px; }
      :global(#Chemex) :global(#Handle) { stroke: black !important; fill: white !important; }
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

const RecipeCard = ({
  recipe,
  children,
}) => (
  <Card href={`/gear?gear=${recipe.method.toLowerCase()}`} className="RecipeCard">
    <div>
      <Icon Comp={recipe.Icon} />
      <h2>{ recipe.method }</h2>
      {
        recipe.recipe && <p className="Card__summary">{ recipe.recipe.summary }</p>
      }
    </div>
    <style jsx>{`
      .Card__summary {
        color: gray;
      }
    `}</style>
  </Card>
)

export default () => (
  <Layout>
    <Head>
      <title>prototyping.☕️</title>
      <meta charSet='utf-8' />
      <meta name='viewport' content='initial-scale=1.0, width=device-width' />
    </Head>
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
    <img src="https://instagram.com/p/BRfl4efgcLR/media/?size=m" />
    <img src="https://instagram.com/p/BO4akDwgpFw/media/?size=m" />
    <p>
      Grind. Rinse. Bloom. Brew. Repeat.
    </p>
    <H>Basics</H>
    <p>
      Grind, Water, Temperature, ...
    </p>
    <H>Equipment</H>
    <p>
      Dripper, Grinder, Scale, Timer
    </p>
    <H>Recipes</H>
    <div className="cards">
      {
        Object.keys(recipes).map(recipe => <RecipeCard key={recipe} recipe={recipes[recipe]} />)
      }
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
)
