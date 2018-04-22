import styled, { css } from 'react-emotion'
import { mobile } from './styleguide'

const justifyMap = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
}

const alignMap = {
  start: 'flex-start',
  end: 'flex-end',
  between: 'space-between',
  around: 'space-around',
  stretch: 'stretch',
}

const justifyContent = justify => (justify ? justifyMap[justify] : 'center')
const alignItems = align => (align ? alignMap[align] : 'center')

const rowMobile = ({ breakToColumn }) =>
  mobile(css`
    flex-direction: ${breakToColumn ? 'column' : 'row'};
  `)

const Box = styled('div')`
  display: flex;
  justify-content: ${props => justifyContent(props.justify)};
  align-items: ${props => alignItems(props.align)};
  flex-wrap: ${props => (props.wrap ? 'wrap' : ' no-wrap')};
  flex-grow: ${props => (props.grow ? 1 : 0)};
  width: 100%;
  position: relative;
`

export const Row = styled(Box)`
  flex-direction: row;
  ${props => rowMobile(props)};
`

export const Column = styled(Box)`
  flex-direction: column;
`

export default Box
