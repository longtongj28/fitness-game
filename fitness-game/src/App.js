import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import MapPage from './components/pages/MapPage';

function App() {
  return (
    <Provider store={store}>
      <MapPage/>
    </Provider>
  );
}

export default App;