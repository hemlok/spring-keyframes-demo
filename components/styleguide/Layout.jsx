import styled from 'react-emotion'
import { layouts } from './styleguide'
import { Column } from 'emotion-box'

export default styled(Column)`
  ${layouts.content};
  margin-top: ${props => (props.withTopbar ? '60px' : 0)};
  z-index: 1;
  position: relative;
`
