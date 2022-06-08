import { Destination } from '../../models/destination';

export interface UpdateTransportationRequestDto {
  departurePlace?: Destination;
  arrivalPlace?: Destination;
}
