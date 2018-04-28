import styled from 'react-emotion'
import React from 'react'
import { Column, Text, styleguide } from './styleguide'

const Card = styled(Column)`
  background-color: ${props =>
    props.light ? props.theme.forground : props.theme.primary};
  padding: ${styleguide.spacing.large};
  width: 100%;
  margin-bottom: ${styleguide.spacing.medium};
  transition: all 200ms ease;
  border-left: 12px solid
    ${props => (props.light ? props.theme.forground : props.theme.primary)};
  cursor: ${props => (props.onClick ? 'pointer' : 'auto')};
  &:hover {
    border-left-color: ${props =>
      !props.light ? props.theme.backgroundLight : props.theme.primary};
  }
`

const Title = styled(Text)`
  margin-bottom: ${styleguide.spacing.medium};
`

export default ({ title, light, link, onClick }) => {
  return (
    <Card justify="start" align="start" light={light} onClick={onClick}>
      <Title primary={light} serif size="title">
        {title}
      </Title>
      <Text primary={light}> {link} </Text>
    </Card>
  )
}
