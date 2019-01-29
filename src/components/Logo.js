import styled from 'styled-components';
import React from 'react';
import { Text, Link } from 'kaffebar';

import LogoSvg from '../svgs/logo.svg';
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
      <Text as="h2">prototyping.coffee</Text>
    </LogoContainer>
  </Link>
);
