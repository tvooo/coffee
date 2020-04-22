import React from 'react';
import { Flex, Box, Text, Link } from 'rebass/styled-components';

const Center = ({ full = false, ...props }) => (
  <Box mx="auto" width={full ? '40rem' : '30rem'} {...props} />
);

const Footer = () => (
  <Box bg="white" py={4}>
    <Center full>
      <Flex justifyContent="space-around" alignItems="center">
        <Text fontFamily="default">
          &copy; {new Date().getFullYear()}{' '}
          <Link href="https://www.tvooo.de">Tim von Oldenburg</Link>. Images
          from{' '}
          <Link href="https://unsplash.com/collections/2206352/coffee">
            Unsplash
          </Link>
          .
        </Text>
      </Flex>
    </Center>
  </Box>
);

export default Footer;
