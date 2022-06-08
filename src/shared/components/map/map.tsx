import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.scss';
import { Destination } from '../../models/destination';
import { Routing } from '../routing/routing';

interface MapProps {
  destinations: Destination[];
  waypoints?: [Destination, Destination];
}

export const Map: FC<MapProps> = ({ destinations, waypoints }) => {
  return (
    <MapContainer center={[55.028739, 82.90692799999999]} zoom={4} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {destinations.map((d) => (
        <Marker position={d.coordinates}>
          <Popup>{d.title}</Popup>
        </Marker>
      ))}
      {waypoints ? <Routing from={waypoints[0].coordinates} to={waypoints[1].coordinates} /> : null}
    </MapContainer>
  );
};
