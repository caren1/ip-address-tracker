import React from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import './App.css';

function App() {


  const position = [52.2297, 21.0122];
  const zoom = 13;

  return (
    <div className="app">
      <header className="tracker">
        <h1>IP Address Tracker</h1>
        <div className="tracker__form">
          <form>
            <input type="text" placeholder="Search for any IP address or domain"/>
            <button type="submit">►</button>
          </form>
        </div>
      </header>
      <main>
        <div className="userData">
          <div className="userData__detail">
            <p className="title">IP address</p>
            <strong><p>192.212.174.101</p></strong>
          </div>
          <div className="userData__detail">
            <p className="title">Location</p>
            <strong><p>Brooklyn, NY, 1001</p></strong>
          </div>
          <div className="userData__detail">
            <p className="title">Timezone</p>
            <strong><p>UTC -05:00</p></strong>
          </div>
          <div className="userData__detail">
            <p className="title">Isp</p>
            <strong><p>SpaceX Starlink</p></strong>
          </div>
        </div>
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>A pretty CSS3 popup.<br />Easily customizable.</Popup>
          </Marker>
       </Map>
      </main>
    </div>
  );
}

export default App;
