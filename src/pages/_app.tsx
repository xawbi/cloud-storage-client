import * as React from 'react';
import {AppProps} from 'next/app';
import {ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import {CacheProvider, EmotionCache} from '@emotion/react';
import theme from '../component/mui/theme';
import createEmotionCache from '../component/mui/createEmotionCache';
import store from "@/store";
import {Provider} from "react-redux";
import '../style.css';

const clientSideEmotionCache = createEmotionCache();

export interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
  Component: AppProps['Component'] & {
    getLayout: (page: React.ReactElement) => React.ReactNode
  }
}

export default function MyApp(props: MyAppProps) {
  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;
  const getLayout = Component.getLayout || ((page: React.ReactNode) => page)

  return (
    <CacheProvider value={emotionCache}>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <CssBaseline/>
          {getLayout(<Component {...pageProps} />)}
        </ThemeProvider>
      </Provider>
    </CacheProvider>
  );
}
