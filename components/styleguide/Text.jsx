import styled, { css } from 'react-emotion'
import { colors, text, font } from './styleguide'

const size = size => (size ? text[size] : text.paragraph)
const weight = ({ light, serif }) => (serif ? '700' : light ? 'book' : 'medium')
const color = ({ onBlack, primary, theme }) =>
  primary ? theme.primary : onBlack ? colors.forground : theme.text

export default styled('p')`
  color: ${props => color(props)};
  font-size: ${props => size(props.size)};
  font-family: ${props => (props.serif ? font.serif : font.sansSerif)};
  margin: 0;
  font-weight: ${props => weight(props)};
  ${props =>
    props.serif &&
    css`
      transform: scaleX(0.8);
      transform-origin: left;
    `};
`
