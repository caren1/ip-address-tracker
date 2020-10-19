import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="tracker">
        <h1>IP Address Tracker</h1>
        <div class="tracker__form">
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
        <div class="map">
          <h1>will be map here</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
