import L from 'leaflet';
import blueMarkerIcon from '../../assets/map-marker-blue.svg';
import redMarkerIcon from '../../assets/map-marker-red.svg';

export const blueMarker = new L.Icon({
  iconUrl: blueMarkerIcon,
  iconRetinaUrl: blueMarkerIcon,
  iconSize: new L.Point(50, 60),
});

export const redMarker = new L.Icon({
  iconUrl: redMarkerIcon,
  iconRetinaUrl: redMarkerIcon,
  iconSize: new L.Point(50, 60),
});
