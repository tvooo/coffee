import React from 'react';
import { ThemeProvider } from 'styled-components';
import { StaticQuery, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import theme from '../theme';
import GlobalStyles from './GlobalStyles';

import './layout.css';

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
