import Head from "next/head";

import Layout from "../components/Layout";
import Menu from "../components/Menu";
import Header from "../components/Header";

export default ({ active, title, children }) => (
  <div>
    <Head>
      <title>{title} | prototyping.☕️</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div style={{ background: "white", padding: "2rem 1rem 0 1rem" }}>
      <Layout>
        <Header />
        <Menu active={active} />
      </Layout>
    </div>
    <Layout>{children}</Layout>
  </div>
);
