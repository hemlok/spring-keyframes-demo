import styled, { css } from 'react-emotion'
import { colors, text, font } from './styleguide'

const size = size => (size ? text[size] : text.paragraph)
const weight = ({ light, serif }) => (serif ? '700' : light ? 'book' : 'medium')
const color = ({ black, primary, theme }) =>
  primary ? theme.primary : black ? colors.black : theme.text

export default styled('p')`
  color: ${props => color(props)};
  font-size: ${props => size(props.size)};
  font-family: ${props => (props.serif ? font.serif : font.sansSerif)};
  margin: 0;
  font-weight: ${props => weight(props)};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  ${props =>
    props.serif &&
    css`
      transform: scaleX(0.8);
      transform-origin: left;
    `};
`
