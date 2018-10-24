import styled from 'styled-components'
import React from 'react'
import { Text } from 'kaffebar'
import typography from '../design/type.json'
// import colors from '../design/colors.json'
import LogoSvg from '../svgs/logo.svg'
import LogoSimpleSvg from '../svgs/logo-simple.svg'
import { Link } from 'kaffebar'

import theme from '../theme'

const LogoType = styled.h2`
  font-size: ${typography.sizes[1]};
  color: black;
  border-bottom: 3px solid transparent;
  margin: 0 0 0 0.5em;
  padding: 0;
  ${'' /* padding-top: 1rem; */};
`

const LogoContainer = styled.div`
  cursor: pointer;
  display: flex;

  flex-direction: column;
  align-items: center;
`

export const SmallLogo = () => (
  <Link href="/" style={{ border: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <LogoSimpleSvg />
      <Text as="h2" style={{ margin: 0 }}>
        prototyping.coffee
      </Text>
    </div>
  </Link>
)

export default () => (
  <Link href="/">
    <LogoContainer>
      <LogoSvg color={theme.colors.text} />
      <Text as="h2">prototyping.coffee</Text>
    </LogoContainer>
  </Link>
)
