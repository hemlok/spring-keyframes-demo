import styled from 'react-emotion'
import React from 'react'
import { Column, Text, styleguide } from './styleguide'
import { ThemeProvider } from 'emotion-theming'

const Card = styled(Column)`
  background-color: ${props => props.theme.background};
  padding: ${styleguide.spacing.large};
  width: 100%;
  margin-bottom: ${styleguide.spacing.medium};
  transition: all 300ms ease;
  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
  &:hover {
    transform: translateX(8px);
    /* filter: saturate(0); */
  }
`

const Title = styled(Text)`
  margin-bottom: ${styleguide.spacing.medium};
`

export default ({ theme, title, link, onClick }) => {
  return (
    <ThemeProvider theme={theme}>
      <Card justify="start" align="start" onClick={onClick}>
        <Title primary serif size="title">
          {title}
        </Title>
        <Text primary> {link} </Text>
      </Card>
    </ThemeProvider>
  )
}
