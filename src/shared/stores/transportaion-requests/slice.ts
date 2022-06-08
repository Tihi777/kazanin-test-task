import { createSlice } from '@reduxjs/toolkit';
import { TransportationRequest } from '../../models/transportation-request';
import { GetTransportationRequests, SelectTransportationRequest, UpdateTransportationRequest } from './actions';

export interface TransportationRequestsState {
  transportationRequests: TransportationRequest[];
  isLoading: boolean;
  isUpdating: boolean;
  error: any;

  selectedTransportationRequests: TransportationRequest | undefined;
}

export const transportationRequestsInitialState: TransportationRequestsState = {
  transportationRequests: [],
  isLoading: false,
  isUpdating: false,
  error: undefined,

  selectedTransportationRequests: undefined,
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
      })
      .addCase(UpdateTransportationRequest, (state, { payload }) => {
        state.transportationRequests = state.transportationRequests.map((t) =>
          t.id === state.selectedTransportationRequests?.id ? { ...t, ...payload } : t
        );
        state.selectedTransportationRequests = { ...state.selectedTransportationRequests, ...payload } as TransportationRequest;
      })
      .addCase(SelectTransportationRequest, (state, { payload }) => {
        state.selectedTransportationRequests = state.transportationRequests.find(({ id }) => id === payload);
      });
  },
});

export const transportationRequestsReducer = transportationRequestsSlice.reducer;
