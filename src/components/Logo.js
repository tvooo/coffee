import styled from 'styled-components';
import React from 'react';
import { Text } from 'kaffebar';
import { Flex, Box, Link } from 'rebass/styled-components';

import LogoSvg from '../svgs/logo.svg';
import LogoSimpleSvg from '../svgs/logo-simple.svg';
import theme from '../theme';

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default () => (
  <Link href="/">
    <LogoContainer>
      <LogoSvg color={theme.colors.text} />
      <Text fontFamily="heading" as="h2">
        prototyping.coffee
      </Text>
    </LogoContainer>
  </Link>
);

export const SimpleLogo = () => (
  <Link variant="blank" href="/">
    <Flex>
      <LogoSimpleSvg color={theme.colors.text} />
      <Text fontFamily="heading" as="h2" ml={2}>
        prototyping.coffee
      </Text>
    </Flex>
  </Link>
);
