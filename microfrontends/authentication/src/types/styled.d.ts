import 'styled-components'
import theme from '@laboriosi/evalu8-tokens/theme.json'

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
