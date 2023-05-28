import './App.css';
import { MapContainer, TileLayer } from 'react-leaflet';
import L from 'leaflet';
import "leaflet-control-geocoder/dist/Control.Geocoder.css";
import "leaflet-control-geocoder/dist/Control.Geocoder.js"
import LeafletGeocoder from './LeafletGeocoder';

function App() {
  const position = [36.1841047, 8.7140193]

  return (
    <div className="App">
      <MapContainer center={position} zoom={10} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LeafletGeocoder />
      </MapContainer>
    </div>
  );
}
let DefaultIcon = L.icon(
  {
    iconUrl: "./icon.png",
    iconSize: [30, 31],


  }
);
L.Marker.prototype.options.icon = DefaultIcon
export default App;
