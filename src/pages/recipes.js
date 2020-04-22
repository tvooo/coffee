import React from 'react';
import { Video } from 'react-feather';
import slug from 'slug';
import { uniq } from 'lodash';
import { withState, compose } from 'recompose';
import { Card, Text } from 'kaffebar';
import { StaticQuery, graphql } from 'gatsby';

import Layout from '../components/Layout';
import Page from '../components/Page';
import Filter from '../components/Filter';
import CardGrid from '../components/CardGrid';

import getMethodPreviewImage from '../utils/getMethodPreviewImage';

import theme from '../theme';

const filterByMethod = (recipes, method) => {
  if (method === 'all') {
    return recipes;
  }
  return recipes.filter((recipe) => recipe.brewer === method);
};

const sortByThing = (recipes, sort) => {
  if (sort === 'latest') {
    return recipes;
  }
  return recipes.sort((a, b) => a[sort] > b[sort]);
};

const sortBy = {
  latest: 'Latest',
  coffee: 'Coffee (g)',
  water: 'Water (g)',
};

const pageQuery = graphql`
  query AllRecipesQuery {
    allAirtable(filter: { table: { eq: "Recipes" } }) {
      edges {
        node {
          data {
            Name
            Coffee
            Water
            URL
            Video
            Brewer {
              data {
                Name
                ImageCode
              }
            }
            Source {
              data {
                Name
                Place
              }
            }
          }
        }
      }
    }
  }
`;

export default compose(
  withState('sort', 'setSort', 'latest'),
  withState('method', 'setMethod', 'all')
)(({ method, setMethod, sort, setSort }) => (
  <StaticQuery
    query={pageQuery}
    render={(data) => {
      const recipes2 = data.allAirtable.edges
        .filter((a) => a.node.data.Name !== ' - ')
        .map(({ node: recipe }) => {
          const {
            Coffee: coffee,
            Name: name,
            Water: water,
            URL: url,
            Video: isVideo,
          } = recipe.data;
          return {
            name,
            coffee,
            water,
            source: {
              name: recipe.data.Source[0].data.Name,
              place: recipe.data.Source[0].data.Place,
            },
            brewer: recipe.data.Brewer[0].data.Name,
            imageCode: recipe.data.Brewer[0].data.ImageCode,
            url,
            isVideo,
          };
        });
      const methods = uniq(recipes2.map((r) => r.brewer).sort()).reduce(
        (prev, curr) => ({ ...prev, [curr]: curr }),
        { all: 'All' }
      );
      return (
        <Layout>
          <Page active="recipes" title="Recipes" showTeaser>
            <Filter
              options={methods}
              selected={method}
              select={setMethod}
              title={<h2 style={{ textAlign: 'center' }}>Filter by brewer</h2>}
              label={(option) => `Show only ${option} recipes`}
            />
            <Filter
              options={sortBy}
              selected={sort}
              select={setSort}
              title={<h2 style={{ textAlign: 'center' }}>Sort</h2>}
              color={false}
              label={(option) => `Sort by ${option}`}
            />
            <CardGrid>
              {sortByThing(filterByMethod(recipes2, method), sort).map(
                (recipe, i) => (
                  <CardGrid.Item
                    key={slug(`${recipe.name}-${i}`)}
                    style={{
                      border: 'none',
                      color: 'inherit',
                      display: 'block',
                    }}
                  >
                    <Card
                      style={{
                        borderBottom: '3px solid black',
                        display: 'block',
                        textDecoration: 'none',
                        cursor: 'pointer',
                        color: theme.colors.text,
                      }}
                      as="a"
                      href={recipe.url}
                    >
                      <img
                        alt=""
                        src={getMethodPreviewImage(recipe.imageCode)}
                        style={{ margin: 0 }}
                      />
                      <Card.Body>
                        <Text fontFamily="heading">{recipe.source.name}</Text>
                        <Text fontFamily="heading" as="h3">
                          {recipe.brewer}
                        </Text>
                        <Text
                          fontFamily="heading"
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 'auto',
                          }}
                        >
                          <span>
                            {recipe.coffee}g :{recipe.water}
                            ml
                          </span>
                          {recipe.isVideo && (
                            <Video aria-label="This is a video recipe" />
                          )}
                        </Text>
                      </Card.Body>
                    </Card>
                  </CardGrid.Item>
                )
              )}
            </CardGrid>
          </Page>
        </Layout>
      );
    }}
  />
));
