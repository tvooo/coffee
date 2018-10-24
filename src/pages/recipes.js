import React from 'react'
// import Link from "next/link";
import { Video } from 'react-feather'
import slug from 'slug'
import styled from 'styled-components'
import Page from '../components/Page'
import Filter from '../components/Filter'
import { uniq } from 'lodash'
import { withState, compose } from 'recompose'
import Layout from '../components/Layout'
import { Link, Card, Text } from 'kaffebar'
import { withPrefix, StaticQuery, graphql } from 'gatsby'

// $ make coffee

import CardGrid from '../components/CardGrid'

import recipes from '../data/recipes'
import { getMethodName, getMethodPreviewImage } from '../utils/methods.js'

const filterByMethod = (recipes, method) => {
  if (method === 'all') {
    return recipes
  }
  return recipes.filter(recipe => recipe.brewer === method)
}

const sortByThing = (recipes, sort) => {
  if (sort === 'latest') {
    return recipes
  }
  return recipes.sort((a, b) => a[sort] > b[sort])
}

const sortBy = {
  latest: 'Latest',
  coffee: 'Coffee (g)',
  water: 'Water (g)',
}

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
`

export default compose(
  withState('sort', 'setSort', 'latest'),
  withState('method', 'setMethod', 'all')
)(({ method, setMethod, sort, setSort }) => (
  <StaticQuery
    query={pageQuery}
    render={data => {
      console.log(data)
      const recipes2 = data.allAirtable.edges
        .filter(a => a.node.data.Name !== ' - ')
        .map(({ node: recipe }) => {
          const { Coffee: coffee, Name: name, Water: water } = recipe.data
          return {
            name,
            coffee,
            water,
            source: {
              name: recipe.data.Source[0].data.Name,
              place: recipe.data.Source[0].data.Place,
            },
            brewer: recipe.data.Brewer[0].data.Name,
            // method: 'v60',
            imageCode: recipe.data.Brewer[0].data.ImageCode,
            url: recipe.data.URL,
          }
        })
      const methods = uniq(recipes2.map(r => r.brewer).sort()).reduce(
        (prev, curr) => ({ ...prev, [curr]: curr }),
        { all: 'All' }
      )
      console.log(recipes2)
      console.log(recipes)
      return (
        <Layout>
          <Page active="recipes" title="Recipes" showTeaser>
            <Filter
              options={methods}
              selected={method}
              select={setMethod}
              title={<h2 style={{ textAlign: 'center' }}>Filter by brewer</h2>}
              label={option => `Show only ${option} recipes`}
            />
            <Filter
              options={sortBy}
              selected={sort}
              select={setSort}
              title={<h2 style={{ textAlign: 'center' }}>Sort</h2>}
              color={false}
              label={option => `Sort by ${option}`}
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
                        <Text>{recipe.source.name}</Text>
                        <Text as="h3">{recipe.brewer}</Text>
                        <Text
                          style={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            marginTop: 'auto',
                          }}
                        >
                          <span>
                            {recipe.coffee}g : {recipe.water}
                            ml
                          </span>
                          {(recipe.vimeo || recipe.youtube) && <Video />}
                        </Text>
                      </Card.Body>
                    </Card>
                  </CardGrid.Item>
                )
              )}
            </CardGrid>
          </Page>
        </Layout>
      )
    }}
  />
))
