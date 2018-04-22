import React from 'react'
import { Column, Text, Divider } from './styleguide'

export default ({ title }) => (
  <Column align="start">
    <Text> {title} </Text>
    <Divider />
  </Column>
)
