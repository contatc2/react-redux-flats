import React from 'react';
import GoogleMapReact from 'google-map-react';

import GM_API_KEY from './config_key';

const MapReact = ({ selectedFlat }) => {
  let marker = null;
  const center = {
    lat: selectedFlat.lat,
    lng: selectedFlat.lng
  };

  if (selectedFlat) {
    marker = (
      <div
        style={{
          width: '20px',
          height: '20px',
          backgroundColor: 'red',
          borderRadius: '50%'
        }}
        lat={selectedFlat.lat}
        lng={selectedFlat.lng}
      />
    );
  }
  return (
    // Important! Always set the container height explicitly
    <div style={{ height: '100vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GM_API_KEY }}
        center={center}
        defaultZoom={15}
      >
        {marker}
      </GoogleMapReact>
    </div>
  );
};

export default MapReact;
