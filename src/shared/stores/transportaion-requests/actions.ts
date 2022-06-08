import { buildTriAction } from '../helpers';
import { TransportationRequest } from '../../models/transportation-request';
import { createAction } from '@reduxjs/toolkit';

export const GetTransportationRequests = buildTriAction<void, TransportationRequest[]>('Get Transportation Requests');

export const SelectTransportationRequest = createAction<number>('Select Transportation Request');
