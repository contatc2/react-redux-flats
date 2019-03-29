import React from 'react';

import FlatList from '../containers/flat_list';
import MapReact from '../containers/map_react';

const App = () => {
  return (
    <div>
      <div className="flat-list">
        <FlatList />
      </div>
      <div className="map-container">
        <MapReact />
      </div>
    </div>
  );
};

export default App;
