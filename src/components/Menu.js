import React from 'react';
import { Flex, Box, Link } from 'rebass/styled-components';

const menu = [
  { title: 'Recipes', slug: 'recipes' },
  // { title: 'Guide', slug: 'coffee-at-home' },
  { title: 'Coffee Knowledge', slug: 'knowledge' },
];

const Menu = (props) => (
  <Flex {...props}>
    {menu.map((item) => (
      <Box m={2} key={item.slug}>
        <Link fontFamily="heading" fontSize={3} href={`/${item.slug}`}>
          {item.title}
        </Link>
      </Box>
    ))}
  </Flex>
);

export default Menu;
