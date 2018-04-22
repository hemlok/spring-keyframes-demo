import styled from 'react-emotion'
import { spacing } from './styleguide'

export default styled('hr')`
  border: 0;
  border-bottom: 2px solid ${props => props.theme.text};
  width: 100%;
  margin: ${spacing.large} 0;
`
