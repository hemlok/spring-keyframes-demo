import { Row } from 'emotion-box'
import styled from 'react-emotion'
import React from 'react'
import { styleguide } from './styleguide'

const Bar = styled(Row)`
  background-color: ${styleguide.colors.background};
  padding: ${styleguide.spacing.medium} 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  z-index: 2;
`

const Hemlok = styled('img')`
  margin: 0 auto;
  height: 15px;
`

export default () => (
  <Bar>
    <Hemlok src="/static/hemlok.svg" alt="hemlok" />
  </Bar>
)
