import * as React from 'react';
import { useColorScheme } from 'react-native'
import { ThemeProvider } from 'styled-components';
import Themes from './configs/theme';
import { Home } from './pages';
 
const App = () => {
  const theme = useColorScheme();

  return (
    <ThemeProvider theme={Themes[theme || 'light']}>
      <Home />;
    </ThemeProvider>
  );
}

export default App;
