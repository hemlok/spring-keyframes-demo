import React from 'react'
import styled from 'react-emotion'
import { Column, Text, Divider, styleguide } from './styleguide'

const List = styled(Column)`
  margin-top: ${styleguide.spacing.large};
`

export default ({ title, style }) => (
  <List align="start" style={style}>
    <Text black> {title} </Text>
    <Divider black />
  </List>
)
