import React from 'react';
import { Provider } from 'react-redux';

import AppContainer from './components/AppContainer';
import './App.scss';
import store from './Store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppContainer />
      </div>
    </Provider>
  );
}

export default App;
