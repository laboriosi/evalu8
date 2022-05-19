import theme from '@laboriosi/evalu8-tokens/theme.json'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { BrowserRouter as Router } from 'react-router-dom'
import { render as rtlRender, RenderOptions } from '@testing-library/react'
import { GlobalStyle } from '@laboriosi/evalu8-ui-library'

function render(ui: React.ReactElement, renderOptions?: RenderOptions) {
  function Wrapper({ children }): JSX.Element {
    return (
      <Router>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </Router>
    )
  }
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions })
}

export * from '@testing-library/react'
export { render }
