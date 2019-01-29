import React from 'react';
import T from 'prop-types';
import { Text, Link } from 'kaffebar';
import styled from 'styled-components';
import Header from './Header';
import Footer from './Footer';

const Block = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;

const Page = ({ children, showTeaser = false }) => (
  <main
    style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      width: '100%',
      minHeight: '100vh',
    }}
  >
    <div
      style={{
        background: 'white',
        padding: '2rem 1rem 1.5rem 1rem',
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
);

Page.propTypes = {
  children: T.node,
  showTeaser: T.bool,
};

export default Page;
