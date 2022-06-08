import { buildTriAction } from '../helpers';
import { TransportationRequest } from '../../models/transportation-request';
import { createAction } from '@reduxjs/toolkit';
import { UpdateTransportationRequestDto } from '../../services/models/update-transportation-request.dto';

export const GetTransportationRequests = buildTriAction<void, TransportationRequest[]>('Get Transportation Requests');

export const UpdateTransportationRequest = createAction<UpdateTransportationRequestDto>('Update Transportation Requests');

export const SelectTransportationRequest = createAction<number>('Select Transportation Request');
