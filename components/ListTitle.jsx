import React from 'react'
import styled from 'react-emotion'
import { Column, Text, Divider, styleguide } from './styleguide'

const List = styled(Column)`
  margin-top: ${styleguide.spacing.large};
`

export default ({ title }) => (
  <List align="start">
    <Text> {title} </Text>
    <Divider />
  </List>
)
