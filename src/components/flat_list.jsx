import React from 'react';

import Flat from './flat';


const FlatList = ({ flats, selectFlat, selectedFlat }) => {
  return (
    flats.map(
      (flat, index) => (
        <Flat
          flat={flat}
          selected={flat.name === selectedFlat.name}
          index={index}
          key={flat.lat}
          selectFlat={selectFlat}
        />
      )
    )
  );
};

export default FlatList;
