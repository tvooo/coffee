module.exports = {
  siteMetadata: {
    title: 'prototyping.coffee',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
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
  ],
};
