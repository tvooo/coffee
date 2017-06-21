import Head from 'next/head';
import Link from 'next/link';

import Layout from '../components/Layout';
import H from '../components/H';
import Player from '../components/Player';

import recipes from '../data/recipes';
import typography from '../design/type.json';

import Filter from '../svgs/chemex-filter.svg';

export default (props) => {
  const recipe = recipes[props.url.query.recipe];

  return (
  <Layout>
    <div className="Fullscreen">
      <Link href="/"><a>Close</a></Link>
      <Player recipe={recipe.recipe} Image={recipe.Image} />
    </div>


    <style jsx>{`
      .jumbo {
        font-size: ${typography.sizes[3]};
      }

      .Fullscreen {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: white;
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-direction: column;
      }

      .Timer {
        flex-grow: 0;
        padding: 2rem;
        font-size: 4rem;
      }

      .hmm {
        display: flex;
        align-items: center;
        justify-content: space-around;
        flex-grow: 1;
      }
    `}</style>
  </Layout>
);
}
