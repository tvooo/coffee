import React from 'react'
// import Layout from '../components/Layout'
// import Menu from '../components/Menu'
import Header from '../components/Header'
import { Text, Link } from 'kaffebar'
// import TextLink from "../components/Link";
import Footer from '../components/Footer'
import { SmallLogo } from '../components/Logo'
import styled from 'styled-components'
const Block = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`

export default ({ active, title, children, showTeaser = false }) => (
  <main
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      width: '100%',
      minHeight: '100vh',
    }}
  >
    {/* <div style={{ padding: '2rem 1rem 1.5rem 1rem' }}>
      <Block>
        <nav style={{ display: 'flex', alignItems: 'center' }}>
          <SmallLogo />
          <Link href="/guide">Beginner's Guide</Link> -{' '}
          <Link href="/">Recipes</Link> -{' '}
          <Link href="/equipment">Equipment</Link>
        </nav>
      </Block>
    </div> */}
    <div
      style={{
        background: 'white',
        padding: '2rem 1rem 1.5rem 1rem',
        // backgroundImage: "url(/static/pattern2.svg)"
      }}
    >
      <Block>
        <Header />
        {showTeaser && (
          <Text as="h1" fontFamily="sans" style={{ textAlign: 'center' }}>
            A collection of coffee brewing recipes
            <br />
            from all over the{' '}
            <span style={{ textDecoration: 'line-through', color: 'grey' }}>
              world
            </span>{' '}
            internet
          </Text>
        )}
      </Block>
    </div>

    <div>
      <Block style={{ paddingBottom: '2rem', paddingTop: '2rem' }}>
        {children}
      </Block>
    </div>

    <Footer style={{ marginTop: 'auto' }}>
      <Block>
        <Text as="small">
          &copy; 2018 Tim von Oldenburg. Images from{' '}
          <Link href="https://unsplash.com/collections/2206352/coffee">
            Unsplash
          </Link>
          .
        </Text>
      </Block>
    </Footer>
  </main>
)
