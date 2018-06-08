import Link from "next/link";
import { Video, Link as LinkIcon, AlignLeft } from "react-feather";
import slug from "slug";
import Page from "../components/Page";

import CardGrid from "../components/CardGrid";

import recipes from "../data/recipes.json";
import { getMethodName, getMethodPreviewImage } from "../utils/methods.js";
// TODO: define colors. cascara = lime green, water = blue, pulp = red-ish violet

export default () => (
  <Page active="recipes" title="Recipes" showTeaser>
    <CardGrid>
      {recipes.map((recipe, i) => (
        <Link
          href={`/recipedetail?recipe=${i}`}
          as={`/r/${slug(`${recipe.method}-${recipe.source}-${i}`, {
            lower: true
          })}`}
          key={slug(`${recipe.method}-${recipe.source}-${i}`)}
        >
          <CardGrid.Card>
            <CardGrid.Card.Image
              alt=""
              src={getMethodPreviewImage(recipe.method.toLowerCase())}
            />
            <CardGrid.Card.Body>
              <p>{recipe.source}</p>
              <h2>{getMethodName(recipe.method)}</h2>
              <p>
                {recipe.coffee} : {recipe.water}
              </p>
              {recipe.vimeo && <Video />}
              {recipe.url && <LinkIcon />}
              {recipe.text && <AlignLeft />}
            </CardGrid.Card.Body>
          </CardGrid.Card>
        </Link>
      ))}
    </CardGrid>
  </Page>
);
