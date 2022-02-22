import React from 'react';

import { Provider } from 'react-redux';
import store from './store';

import ObjectiveMap from './components/ObjectiveMap'
function App() {
  return (
    <Provider store={store}>
      <ObjectiveMap/>
      <>Hello</>
    </Provider>
  );
}

export default App;