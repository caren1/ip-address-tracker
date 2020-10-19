import React, { useState } from 'react';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import { getUserData } from './api/index'

import './App.css';

function App() {

  const initData = {
    ip: '8.8.8.8',
    isp: 'Google LLC',
    location: {
      country: 'US',
      region: 'California',
      city: 'Mountain View',
      timezone: '-07:00',
      lat: 37.4223,
      lng: -122.085,
    },
  }

  const [ userIp, setUserIp ] = useState('');
  const [ userData, setUserData ] = useState(initData);

  const handleUserInput = (event) => {
    console.log(event.target.value);
    setUserIp(event.target.value);
  }

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = await getUserData(userIp);
    if (data) {
      console.log(data);
      setUserData(data);
    }
    setUserIp('');
  }

  const { ip, isp, location } = userData;
  const position = [location.lat, location.lng];

  return (
    <div className="app">
      <header className="tracker">
        <h1>IP Address Tracker</h1>
        <div className="tracker__form">
          <form>
            <input value={userIp} type="text" placeholder="Search for any IP address or domain.." onChange={handleUserInput}/>
            <button type="submit" onClick={handleSubmit}>►</button>
          </form>
        </div> 
      </header>
      <main>
        <div className="wrapper">
          <div className="userData">
            <div className="userData__detail">
              <p className="title">IP address</p>
              <strong><p>{ip}</p></strong>
            </div>
            <hr />
            <div className="userData__detail">
              <p className="title">Location</p>
              <strong><p>{location.country}, {location.region}, {location.city}</p></strong>
            </div>
            <hr />
            <div className="userData__detail">
              <p className="title">Timezone</p>
              <strong><p>UTC {location.timezone}</p></strong>
            </div>
            <hr />
            <div className="userData__detail">
              <p className="title">Isp</p>
              <strong><p>{isp}</p></strong>
            </div>
          </div>
        </div>
        
        <Map center={position} zoom={13}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>{ip}<br/>{location.city}<br/>{isp}</Popup>
          </Marker>
       </Map>
      </main>
    </div>
  );
}

export default App;
