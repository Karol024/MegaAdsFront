import React from 'react';
import {MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';
import '../../utils/fix-map-icon'

import 'leaflet/dist/leaflet.css';
import './Map.css'

export const Map = () => {
    return (
      <div className="map">
      <MapContainer center={[52.4040697,16.9137443]} zoom={13}>
          <TileLayer
             url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
             attribution="&copy; <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap<a/> & contributors"
          />
          <Marker position={[52.4040697,16.9137443]}>
              <Popup>
                  <h2>Poznan</h2>
                  <p>Smierdzi kupa</p>
              </Popup>
          </Marker>
      </MapContainer>
      </div>
    );
}