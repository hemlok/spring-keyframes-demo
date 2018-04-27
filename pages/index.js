import React from 'react'
import Link from 'next/link'
import { ThemeProvider } from 'emotion-theming'
import styled, { hydrate, injectGlobal } from 'react-emotion'
import { Layout, Text, Column, styleguide } from '../components/styleguide'
import { ListTitle, Card } from '../components'

// Adds server generated styles to emotion cache.
// '__NEXT_DATA__.ids' is set in '_document.js'
if (typeof window !== 'undefined') {
  hydrate(window.__NEXT_DATA__.ids)
}

injectGlobal`
  html, body {
    margin: 0;
    background: ${styleguide.colors.background};
    font-family: Futura, Helvetica, Arial, sans-serif;
    font-size: 14px;
  }
  * {
    box-sizing: border-box;
  }
`

const battlefyTheme = {
  background: '#151B27',
  primary: styleguide.colors.backgroundLight,
  text: '#FFFFFF',
}

const uiTheme = {
  background: '#3232CC',
  primary: styleguide.colors.backgroundLight,
  text: '#000000',
}

const goodlordTheme = {
  background: '#27363A',
  primary: styleguide.colors.backgroundLight,
  text: '#000000',
}

const vaultTheme = {
  background: '#424242',
  primary: styleguide.colors.backgroundLight,
  text: '#000000',
}

const writingTheme = {
  background: styleguide.colors.forground,
  primary: styleguide.colors.primary,
}

const Hero = styled(Column)`
  margin-top: 10vh;
`

const Hemlok = styled('img')`
  margin: 100px 0;
  max-width: 70%;
`
const sized = {
  large: '400px',
  small: '150px',
  medium: '200px',
}

const circleSize = ({ size }) => sized[size]

const Circle = styled('div')`
  border-radius: 100%;
  background-color: ${styleguide.colors.primary};
  width: ${props => circleSize};
  height: ${props => circleSize};
  z-index: 0;
  position: absolute;
`

const Bg = () => (
  <div>
    <Circle size="large" style={{ left: '-20%', top: '50px' }} />
    <Circle size="small" style={{ right: '-40px', top: '-40px' }} />
    <Circle size="medium" style={{ right: '-20px', top: '300px' }} />
  </div>
)

export default () => (
  <ThemeProvider theme={styleguide.colors}>
    <Layout>
      <Hero align="start">
        <Text> UI Designer & Engineer </Text>
        <Hemlok src="/static/hemlok.svg" alt="hemlok" />
      </Hero>
      <ListTitle title="Product" style={{ position: 'relative', zIndex: 1 }} />
      <div style={{ position: 'relative' }}>
        <Bg />
        <Card title="scoops" link="scoops.io" theme={uiTheme} />
        <Link href="/battlefy" prefetch>
          <Card title="battlefy" link="battlefy.com" theme={uiTheme} />
        </Link>
        <Card title="vault" link="vault.crucible.gg" theme={uiTheme} />
      </div>
      <ListTitle title="UI" />
      <Card title="goodlord" link="goodlord.co" theme={writingTheme} />

      <ListTitle title="Libraries" />
      <Card
        title="spring-keyframes"
        link="github.com/hemlok/spring-keyframes"
        theme={writingTheme}
      />
    </Layout>
  </ThemeProvider>
)
