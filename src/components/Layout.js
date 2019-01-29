import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import colors from '../design/colors.json';
import fonts from '../design/fonts.json';
import { withPrefix, StaticQuery, graphql } from 'gatsby';
import theme from '../theme';
import GlobalStyles from './GlobalStyles';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import './layout.css';
const Lt = styled.div`
  max-width: 1400px;
  margin: 0 auto;
`;
const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <GlobalStyles />

        <ThemeProvider theme={theme}>
          <div>{children}</div>
        </ThemeProvider>
      </>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
