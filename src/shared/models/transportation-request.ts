import { Destination } from './destination';

export interface TransportationRequest {
  id: number;
  departurePlace: Destination;
  arrivalPlace: Destination;
}
