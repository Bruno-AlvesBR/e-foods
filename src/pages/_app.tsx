import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core';

import { CartProvider } from '../hooks/Cart';
import Header from '../components/Header';

import { theme } from '../styles/theme';
import { GlobalStyles } from '../styles/globals';

function MyApp({ Component, pageProps }) {
  return (
    <CartProvider>
      <ThemeProvider theme={theme}>
        <Header />
        <Component {...pageProps} />
        <GlobalStyles />
        <CssBaseline />
      </ThemeProvider>
    </CartProvider>
  );
}

export default MyApp;
