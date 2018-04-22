import React from 'react'
import styled from 'react-emotion'
import { Layout, Text, Divider } from '../components/styleguide'
import { ThemeProvider } from 'emotion-theming'

const battlefyStyles = {
  background: '#151B27',
  primary: '#EB2B44',
  text: '#FFFFFF',
}

const Background = styled('div')`
  background-color: ${props => props.theme.background};
  width: 100%;
  min-height: 100vh;
`

export default () => (
  <ThemeProvider theme={battlefyStyles}>
    <Background>
      <Layout>
        <Text hero serif>
          battlefy
        </Text>
        <Divider />
      </Layout>
    </Background>
  </ThemeProvider>
)
