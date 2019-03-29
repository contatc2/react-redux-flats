import React, { Component } from 'react';

import FlatList from './flat_list';
import MapReact from './map_react';
import flats from '../../data/flats';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFlat: flats[0],
      flats
    };
  }

  selectFlat = (index) => {
    this.setState({
      selectedFlat: flats[index]
    });
  }

  render () {
    const { selectedFlat } = this.state;
    return (
      <div>
        <div className="flat-list">
          <FlatList
            flats={this.state.flats}
            selectFlat={this.selectFlat}
            selectedFlat={selectedFlat}
          />
        </div>
        <div className="map-container">
          <MapReact
            selectedFlat={selectedFlat}
          />
        </div>
      </div>
    );
  }
}

export default App;
