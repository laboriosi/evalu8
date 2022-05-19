import styled from 'styled-components'
import { Subtitle as DefaultSubtitle } from '@laboriosi/evalu8-ui-library'

const Subtitle = styled(DefaultSubtitle)`
  margin-bottom: ${({ theme }) => theme.spacing.s8};
`

export default Subtitle
