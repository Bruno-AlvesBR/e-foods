import { CssBaseline } from "@material-ui/core"
import { ThemeProvider } from "@material-ui/core"
import { theme } from "../styles/theme"

import { GlobalStyles } from "../styles/globals"
import { CartContextProvider } from "../hooks/Cart"

function MyApp({ Component, pageProps }) {
  return (
    <CartContextProvider>
      <ThemeProvider theme={theme}>
        <header></header>
        <main>
          <Component {...pageProps} />
          <GlobalStyles />
          <CssBaseline />
        </main>
      </ThemeProvider>
    </CartContextProvider>
  )
}

export default MyApp
