import { buildTriAction } from '../helpers';
import { Destination } from '../../models/destination';

export const GetDestinations = buildTriAction<void, Destination[]>('Get Destinations');
