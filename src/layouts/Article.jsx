import React from 'react';
import PropTypes from 'prop-types';
import { Flex, Box, Text, Link } from 'rebass/styled-components';

import Layout from '../components/Layout';
import Logo, { SimpleLogo } from '../components/Logo';
import Menu from '../components/Menu';
import Footer from '../components/Footer';
import MDX from '../components/MDX';

const Center = ({ full = false, ...props }) => (
  <Box mx="auto" width={full ? '40rem' : '30rem'} {...props} />
);

const Hdr = () => (
  <Box bg="white" py={4}>
    <Center full>
      <Flex justifyContent="space-between" alignItems="center">
        <SimpleLogo />
        <Menu />
      </Flex>
    </Center>
  </Box>
);

const Article = ({ children }) => {
  return (
    <Layout>
      <Flex flexDirection="column" minHeight="100vh">
        {/* <Page active="recipes" title="Recipes" showTeaser={false}> */}
        <Hdr />
        <Center py={5} full>
          <MDX>{children}</MDX>
        </Center>
        {/* <Box width="30rem">{children}</Box> */}
        <Box mt="auto">
          <Footer mt="auto" />
        </Box>
        {/* </Page> */}
      </Flex>
    </Layout>
  );
};

Article.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Article;
