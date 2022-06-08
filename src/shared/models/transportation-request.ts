import { Destination } from './destination';

export interface TransportationRequest {
  id: number;
  date: number;
  departurePlace: Destination;
  arrivalPlace: Destination;
}
