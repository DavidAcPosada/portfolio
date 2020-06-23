import React from 'react';
import Landing from './pages/Landing'
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './utils/config/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Landing />
    </ThemeProvider>
  );
}

export default App;
