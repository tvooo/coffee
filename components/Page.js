import Head from "next/head";
import Link from "next/link";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Header from "../components/Header";
import H from "../components/H";
import TextLink from "../components/Link";
import Footer from "../components/Footer";

export default ({ active, title, children, showTeaser = false }) => (
  <main
    style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      width: "100%",
      minHeight: "100vh"
    }}
  >
    <Head>
      <title>{title} | prototyping.☕️</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <base href="/" />
    </Head>
    <div
      style={{
        background: "white",
        padding: "2rem 1rem 1.5rem 1rem",
        backgroundImage: "url(/static/pattern2.svg)"
      }}
    >
      <Layout>
        <Header />
        {showTeaser && (
          <H>
            A collection of coffee brewing recipes
            <br />
            from all over the world
          </H>
        )}
      </Layout>
    </div>

    <div>
      <Layout style={{ paddingBottom: "2rem" }}>{children}</Layout>
    </div>

    <Footer style={{ marginTop: "auto" }}>
      <Layout>
        <small>
          &copy; 2018 Tim von Oldenburg. Images from{" "}
          <Link href="https://unsplash.com/collections/2206352/coffee">
            <a>Unsplash</a>
          </Link>
          .
        </small>
      </Layout>
    </Footer>
  </main>
);
