import { createSlice } from '@reduxjs/toolkit';
import { TransportationRequest } from '../../models/transportation-request';
import { GetTransportationRequests } from './actions';

export interface TransportationRequestsState {
  transportationRequests: TransportationRequest[];
  isLoading: boolean;
  error: any;
}

export const transportationRequestsInitialState: TransportationRequestsState = {
  transportationRequests: [],
  isLoading: false,
  error: undefined,
};

const transportationRequestsSlice = createSlice({
  name: 'transportationRequests',
  initialState: transportationRequestsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetTransportationRequests.base, (state) => {
        state.isLoading = true;
      })
      .addCase(GetTransportationRequests.successAction, (state, { payload }) => {
        state.isLoading = false;
        state.transportationRequests = payload;
      })
      .addCase(GetTransportationRequests.failureAction, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const transportationRequestsReducer = transportationRequestsSlice.reducer;
