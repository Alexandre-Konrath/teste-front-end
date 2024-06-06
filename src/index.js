import React from 'react';
import ReactDOM from 'react-dom';

import { ThemeProvider } from 'styled-components';
import GlobalStyle from './style/global';
import theme from './style/theme';

import MainPage from './page/MainPage';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <MainPage />
      <GlobalStyle />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
