const slug = require("slug");
const recipes = require("./data/recipes");

module.exports = {
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
        // "/equipment": { page: "/equipment" },
        "/recipes": { page: "/recipes" }
      },
      recipePathMap
    );
  }
};
