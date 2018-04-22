import React from 'react'
import styled from 'react-emotion'
import { ThemeProvider } from 'emotion-theming'

import { Layout, Text, Column, styleguide } from '../components/styleguide'
import { ListTitle, Card } from '../components'

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

export default () => (
  <ThemeProvider theme={styleguide.colors}>
    <Background>
      <Layout>
        <Column align="start">
          <Text> UI Designer & Engineer </Text>
          <img src="/static/hemlok.svg" alt="hemlok" />
        </Column>
        <ListTitle title="Products" />
        <Card title="scoops" link="scoops.io" theme={scoopsTheme} />
        <Card title="battlefy" link="battlefy.com" theme={battlefyTheme} />
        <Card title="vault" link="vault.crucible.gg" theme={vaultTheme} />
        <ListTitle title="UI" />
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
