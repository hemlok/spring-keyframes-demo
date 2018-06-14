import styled from 'react-emotion'
import { spacing } from './styleguide'

export default styled('div')`
  margin: ${props => (props.size ? spacing[props.size] : spacing.medium)}
    ${props => (props.size ? spacing[props.size] : spacing.medium)} 0 0;
`
