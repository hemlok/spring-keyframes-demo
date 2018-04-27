import React from 'react'
import styled from 'react-emotion'
import { Layout, Text, Divider, styleguide } from '../components/styleguide'
import { Topbar } from '../components'
import { ThemeProvider } from 'emotion-theming'

const pageTheme = {
  background: styleguide.colors.forground,
  primary: styleguide.colors.primary,
  text: styleguide.colors.blackText,
}

const Background = styled('div')`
  background-color: ${props => props.theme.background};
  width: 100%;
  min-height: 100vh;
`

export default () => (
  <ThemeProvider theme={pageTheme}>
    <Background>
      <Topbar />
      <Layout withTopbar>
        <Text size="title" serif primary>
          battlefy
        </Text>
        <Divider primary />
        <Text>
          Mauris dignissim nunc elit, sit amet pretium nisl luctus et. In eu
          nunc enim. Maecenas sit amet vestibulum nulla. Mauris viverra pretium
          aliquet. Aliquam erat volutpat.
        </Text>
        <a href="https://battlefy.com">battlefy.com</a>
        <Divider primary />
      </Layout>
    </Background>
  </ThemeProvider>
)
