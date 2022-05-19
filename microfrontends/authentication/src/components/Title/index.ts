import styled from 'styled-components'
import { Title as DefaultTitle } from '@laboriosi/evalu8-ui-library'

const Title = styled(DefaultTitle)`
  margin-bottom: ${({ theme }) => theme.spacing.s2};
`

export default Title
