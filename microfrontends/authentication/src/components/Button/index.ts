import styled from 'styled-components'
import { Button as DefaultButton } from '@laboriosi/evalu8-ui-library'

const Button = styled(DefaultButton)`
  margin-top: ${({ theme }) => theme.spacing.s8};
`

export default Button
