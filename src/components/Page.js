import React from 'react';
import T from 'prop-types';
import { Flex, Box, Text } from 'rebass/styled-components';
import styled from 'styled-components';
import Footer from './Footer';
import Menu from './Menu';
import Logo from './Logo';

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
        <Box mt={4} mb={1}>
          <Logo />
        </Box>
        <Flex justifyContent="space-around">
          <Menu />
        </Flex>
        {showTeaser && (
          <Text
            as="h1"
            my={5}
            fontFamily="heading"
            style={{ textAlign: 'center' }}
          >
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

    <Footer />
  </main>
);

Page.propTypes = {
  children: T.node,
  showTeaser: T.bool,
};

export default Page;
