import React from 'react';
import ReduxProvider from './redux/ReduxProvider';
import Router from './navigation/Router';
import {PaperProvider} from 'react-native-paper';

const App = () => {
  // TODO: Darkmode-Lightmode eklenecek.
  // TODO: RN Flash Messages Eklenecek.
  return (
    <ReduxProvider>
      <PaperProvider>
        <Router />
      </PaperProvider>
    </ReduxProvider>
  );
};

export default App;
