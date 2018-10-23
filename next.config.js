const slug = require("slug");
const path = require("path");
// const recipes = require("./data/recipes");
const recipes = [];

const withMDX = require("@zeit/next-mdx")({
  extension: /\.mdx?$/,
  options: {
    // mdPlugins: [images, emoji]
  }
});

module.exports = withMDX({
  webpack: {
    resolve: {
      alias: {
        // adjust this path as needed depending on where your webpack config is
        "styled-components": path.resolve("./node_modules/styled-components")
      }
    }
  },
  pageExtensions: ["js", "jsx", "md", "mdx"],
  exportPathMap: function() {
    const recipePathMap = {};
    recipes.forEach((recipe, index) => {
      recipePathMap[
        `/r/${slug(`${recipe.method}-${recipe.source}-${index}`, {
          lower: true
        })}`
      ] = {
        page: "/recipedetail",
        query: { recipe: index }
      };
    });
    return Object.assign(
      {},
      {
        "/": { page: "/" },
        //        "/admin": { page: "/admin" },
        // "/equipment": { page: "/equipment" },
        "/recipes": { page: "/recipes" }
      },
      recipePathMap
    );
  }
});
