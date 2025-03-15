import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ThemeProvider } from '@emotion/react';
import theme from './theme';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './store/store';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);


root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}> //integrate theme.ts into app
        <CssBaseline /> //for reseting css
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ThemeProvider></Provider>
  </React.StrictMode>
);

