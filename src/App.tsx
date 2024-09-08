import React from 'react';
import ReduxProvider from './redux/ReduxProvider';
import Router from './navigation/Router';
import {PaperProvider} from 'react-native-paper';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor} from './redux/store';
import {Loading} from './components';

const App = () => {
  // TODO: Darkmode-Lightmode eklenecek.
  // TODO: RN Flash Messages Eklenecek.
  return (
    <ReduxProvider>
      <PersistGate loading={<Loading />} persistor={persistor}>
        <PaperProvider>
          <Router />
        </PaperProvider>
      </PersistGate>
    </ReduxProvider>
  );
};

export default App;
