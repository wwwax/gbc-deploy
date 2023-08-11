import { AppProps } from 'next/app';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import theme from '@/utils/theme';
import '../styles/globals.css';

const App = ({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>global-business-class</title>
      </Head>
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default App;
