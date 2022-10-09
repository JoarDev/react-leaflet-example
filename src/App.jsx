import { useState } from 'react';
import './App.css';
import { MapContainer } from 'react-leaflet/MapContainer';
import { TileLayer } from 'react-leaflet/TileLayer';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

function MyComponent({ location, setLocation }) {
  useMapEvents({
    click: (e) => {
      console.log('event', e);
      setLocation(e.latlng);
    },
  });
  return (
    <Marker position={[location.lat, location.lng]}>
      <Popup>
        A pretty CSS3 popup. <br /> Easily customizable.
      </Popup>
    </Marker>
  );
}

const center = [52.22977, 21.01178];

function App() {
  const [location, setLocation] = useState({
    lat: 12,
    lng: 13,
  });
  return (
    <div className="App">
      <h1>React + Leaflet</h1>
      <h3>
        latitude:{location.lat} longitude:{location.lng}
      </h3>
      <MapContainer center={center} zoom={18}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MyComponent location={location} setLocation={setLocation} />
      </MapContainer>
    </div>
  );
}

export default App;
