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

const Background = styled('div')`
  background-color: ${props => props.theme.background};
  width: 100%;
  min-height: 100vh;
`

const battlefyTheme = {
  background: '#151B27',
  primary: '#EB2B44',
  text: '#FFFFFF',
}

const scoopsTheme = {
  background: '#FFFFFF',
  primary: '#FF6639',
  text: '#000000',
}

const goodlordTheme = {
  background: '#27363A',
  primary: '#34D9C3',
  text: '#000000',
}

const vaultTheme = {
  background: '#FFFFFF',
  primary: '#646464',
  text: '#000000',
}

const Hero = styled(Column)`
  margin-top: 10vh;
`

const Hemlok = styled('img')`
  margin: 100px 0;
`

export default () => (
  <ThemeProvider theme={styleguide.colors}>
    <Background>
      <Layout>
        <Hero align="start">
          <Text> UI Designer & Engineer </Text>
          <Hemlok src="/static/hemlok.svg" alt="hemlok" />
        </Hero>
        <ListTitle title="Work" />
        <Card title="scoops" link="scoops.io" theme={scoopsTheme} />
        <Link href="/battlefy" prefetch>
          <Card title="battlefy" link="battlefy.com" theme={battlefyTheme} />
        </Link>
        <Card title="vault" link="vault.crucible.gg" theme={vaultTheme} />
        <Card title="goodlord" link="goodlord.co" theme={goodlordTheme} />
        <ListTitle title="Libraries" />
        <Card
          title="spring-keyframes"
          link="github.com/hemlok/spring-keyframes"
          theme={vaultTheme}
        />
      </Layout>
    </Background>
  </ThemeProvider>
)
