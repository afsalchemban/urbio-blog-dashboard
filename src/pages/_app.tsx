import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '../store';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <CssBaseline />
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </Provider>
  );
}
