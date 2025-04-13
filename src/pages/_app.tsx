import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Provider } from 'react-redux';
import { store } from '../store';
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/styles/theme';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Blog Dashboard</title>
        <meta name="description" content="A simple blog dashboard built with Next.js and RTK Query" />
      </Head>

      <Provider store={store}>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </>
  );
}
