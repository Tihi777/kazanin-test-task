import { createTriAction } from '../helpers';
import { TransportationRequest } from '../../models/transportation-request';

export const GetTransportationRequests = createTriAction<void, TransportationRequest[]>('Get Transportation Requests');
