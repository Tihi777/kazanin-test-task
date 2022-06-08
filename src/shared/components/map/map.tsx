import { FC } from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import './map.scss';
import { Destination } from '../../models/destination';
import { Routing } from '../routing/routing';
import { blueMarker, redMarker } from '../icons/icons';

interface MapProps {
  destinations: Destination[];
  waypoints?: [Destination, Destination];
}

export const Map: FC<MapProps> = ({ destinations, waypoints }) => {
  const renderMarkers = () => {
    return destinations.map((d) => {
      const icon =
        d.coordinates.toString() === waypoints?.[0].coordinates.toString() ||
        d.coordinates.toString() === waypoints?.[1].coordinates.toString()
          ? redMarker
          : blueMarker;
      return (
        <Marker position={d.coordinates} icon={icon}>
          <Popup>{d.title}</Popup>
        </Marker>
      );
    });
  };

  return (
    <MapContainer center={[55.028739, 82.90692799999999]} zoom={4} scrollWheelZoom={true}>
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      {renderMarkers()}
      {waypoints ? <Routing from={waypoints[0].coordinates} to={waypoints[1].coordinates} /> : null}
    </MapContainer>
  );
};
