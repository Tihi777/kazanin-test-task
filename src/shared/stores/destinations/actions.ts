import { createTriAction } from '../helpers';
import { Destination } from '../../models/destination';

export const GetDestinations = createTriAction<void, Destination[]>('Get Destinations');
