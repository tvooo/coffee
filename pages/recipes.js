// import Link from "next/link";
import { Video, Link as LinkIcon, AlignLeft } from "react-feather";
import slug from "slug";
import styled from "styled-components";
import Page from "../components/Page";

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

{
  /* <Link
  href={`/recipedetail?recipe=${i}`}
  as={`/r/${slug(`${recipe.method}-${recipe.source}-${i}`, {
    lower: true
  })}`}
  key={slug(`${recipe.method}-${recipe.source}-${i}`)}
> */
}

export default () => (
  <Page active="recipes" title="Recipes" showTeaser>
    <CardGrid>
      {recipes.map((recipe, i) => (
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
);
