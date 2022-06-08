import { FC } from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import './map.scss';

export const Map: FC = () => {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
    </MapContainer>
  );
};
