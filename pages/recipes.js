// import Link from "next/link";
import { Video, Link as LinkIcon, AlignLeft } from "react-feather";
import slug from "slug";
import styled from "styled-components";
import Page from "../components/Page";
import Filter from "../components/Filter";
import { uniq } from "lodash";
import { withState, compose } from "recompose";

import CardGrid from "../components/CardGrid";

import recipes from "../data/recipes";
import { getMethodName, getMethodPreviewImage } from "../utils/methods.js";

const Link = styled.a`
  color: inherit;
  text-decoration: none;
  display: block;
  flex-basis: 300px;
  min-width: 0;
  flex-grow: 0;
  flex-shrink: 1;
  margin: 1.5rem;
`;

const Heading = styled.h2`
  margin: 0 0 1em 0;
`;

const methods = uniq(recipes.map(r => r.method).sort()).reduce(
  (prev, curr) => ({ ...prev, [curr]: getMethodName(curr) }),
  { all: "All" }
);

const filterByMethod = (recipes, method) => {
  if (method === "all") {
    return recipes;
  }
  return recipes.filter(recipe => recipe.method === method);
};

const sortByThing = (recipes, sort) => {
  if (sort === "latest") {
    return recipes;
  }
  return recipes.sort((a, b) => a[sort] > b[sort]);
};

const sortBy = {
  latest: "Latest",
  coffee: "Coffee (g)",
  water: "Water (g)"
};

console.log(methods);

export default compose(
  withState("sort", "setSort", "latest"),
  withState("method", "setMethod", "all")
)(({ method, setMethod, sort, setSort }) => (
  <Page active="recipes" title="Recipes" showTeaser>
    <Filter
      options={methods}
      selected={method}
      select={setMethod}
      title={<h2 style={{ textAlign: "center" }}>Filter by method</h2>}
      label={option => `Show only ${option} recipes`}
    />
    <Filter
      options={sortBy}
      selected={sort}
      select={setSort}
      title={<h2 style={{ textAlign: "center" }}>Sort</h2>}
      color={false}
      label={option => `Sort by ${option}`}
    />
    <CardGrid>
      {sortByThing(filterByMethod(recipes, method), sort).map((recipe, i) => (
        <Link
          href={recipe.url}
          key={slug(`${recipe.method}-${recipe.source}-${i}`)}
        >
          <CardGrid.Card>
            <CardGrid.Card.Image
              alt=""
              src={getMethodPreviewImage(recipe.method.toLowerCase())}
            />
            <CardGrid.Card.Body
              style={{
                display: "flex",
                flexDirection: "column",
                height: "calc(100% - 10rem)",
                boxSizing: "border-box"
              }}
            >
              <span>{recipe.source}</span>
              <Heading>{getMethodName(recipe.method)}</Heading>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  marginTop: "auto"
                }}
              >
                <span>
                  {recipe.coffee} : {recipe.water}
                </span>
                {(recipe.vimeo || recipe.youtube) && <Video />}
              </div>
            </CardGrid.Card.Body>
          </CardGrid.Card>
        </Link>
      ))}
    </CardGrid>
  </Page>
));
