import theme from '@laboriosi/evalu8-tokens/theme.json'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { GlobalStyle, Header } from '@laboriosi/evalu8-ui-library'
import { Logo } from '@laboriosi/evalu8-icons'
import { MainContainer } from '~components'
import Routes from '~routes'
import '@laboriosi/evalu8-fonts/fonts.css'

function App() {
  return (
    <Router>
      <Header>
        <Logo />
      </Header>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <MainContainer>
          <Routes />
        </MainContainer>
      </ThemeProvider>
    </Router>
  )
}

export default App
