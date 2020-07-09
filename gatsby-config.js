module.exports = {
  siteMetadata: {
    title: 'prototyping.coffee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'prototyping.coffee',
        short_name: 'coffee',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    `gatsby-plugin-mdx`,
    'gatsby-plugin-react-svg',
    {
      resolve: `gatsby-source-airtable`,
      options: {
        apiKey: process.env.GATSBY_AIRTABLE_KEY, // may instead specify via env, see below
        tables: [
          {
            baseId: `apppJsxJ6QLSi0IZi`,
            tableName: `Recipes`,
            tableView: `Grid view`,
            // queryName: `OPTIONAL_NAME_TO_IDENTIFY_TABLE`, // optional
            // mapping: { Name: `text` }, // optional, e.g. "text/markdown", "fileNode"
            tableLinks: [`Brewer`, 'Source'], // optional, for deep linking to records across tables.
          },
          {
            baseId: `apppJsxJ6QLSi0IZi`,
            tableName: `Brewers`,
            tableView: `Grid view`,
          },
          {
            baseId: `apppJsxJ6QLSi0IZi`,
            tableName: `Sources`,
            tableView: `Grid view`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-goatcounter`,
      options: {
        // Either `code` or `selfHostUrl` is required.
        // REQUIRED IF USING HOSTED GOATCOUNTER! https://[my_code].goatcounter.com
        // code: 'YOUR_GOATCOUNTER_PAGE_CODE',

        // REQUIRED IF USING SELFHOSTED GOATCOUNTER!
        selfHostUrl: `https://goat.protoandtype.com`,

        // ALL following settings are OPTIONAL

        // // Avoids sending pageview hits from custom paths
        // exclude: [],

        // // Delays sending pageview hits on route update (in milliseconds)
        // pageTransitionDelay: 0,

        // Defines where to place the tracking script
        // // boolean `true` in the head and `false` in the body
        // head: false,

        // // Set to true to include a gif to count non-JS users
        // pixel: false,

        // // Allow requests from local addresses (localhost, 192.168.0.0, etc.)
        // // for testing the integration locally.
        // // TIP: set up a `Additional Site` in your GoatCounter settings
        // // and use its code conditionally when you `allowLocal`, example below
        // allowLocal: false,

        // // Override the default localStorage key more below
        // localStorageKey: 'skipgc',

        // // Set to boolean true to enable referrer set via URL parameters
        // // Like example.com?ref=referrer.com or example.com?utm_source=referrer.com
        // // Accepts a function to override the default referrer extraction
        // // NOTE: No Babel! The function will be passes as is to your websites <head> section
        // // So make sure the function works as intended in all browsers you want to support
        // referrer: false,

        // // Setting it to boolean true will clean the URL from
        // // `?ref` & `?utm_` parameters before sending it to GoatCounter
        // // It uses `window.history.replaceState` to clean the URL in the
        // // browser address bar as well.
        // // This is to prevent ref tracking ending up in your users bookmarks.
        // // All parameters other than `ref` and all `utm_` will stay intact
        // urlCleanup: false,
      },
    },
  ],
};
