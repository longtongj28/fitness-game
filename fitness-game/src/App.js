import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MapPage from './components/pages/MapPage';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Ranks from './components/pages/Ranks';
import Home from './components/pages/Home';
import Rewards from './components/pages/Rewards';
import Zone from './components/pages/Zone';





function App() {
  return (

    <Provider store={store}>  
        <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/discover" element={<MapPage/>} />
            <Route path="/ranks" element={<Ranks/>} />
            <Route path="/rewards" element={<Rewards/>} />
            <Route path="/zone" element={<Zone/>} />
        </Routes>
      </Router>
    </Provider>

  );
}

export default App;