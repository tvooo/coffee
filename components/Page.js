import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Header from "../components/Header";
import H from "../components/H";
import TextLink from "../components/Link";

export default ({ active, title, children, showTeaser = false }) => (
  <div>
    <Head>
      <title>{title} | prototyping.☕️</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div style={{ background: "white", padding: "2rem 1rem 1.5rem 1rem" }}>
      <Layout>
        <Header />
        {showTeaser && (
          <H>
            A collection of coffee brewing recipes<br />from all over the world
          </H>
        )}
      </Layout>
    </div>
    {/* <Menu active={active} /> */}

    <Layout>{children}</Layout>

    <Layout>
      <small>
        Images from{" "}
        <Link href="https://unsplash.com/collections/2206352/coffee">
          <a>Unsplash</a>
        </Link>
      </small>
    </Layout>
  </div>
);
