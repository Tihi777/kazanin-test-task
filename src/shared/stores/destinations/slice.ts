import { createSlice } from '@reduxjs/toolkit';

import { GetDestinations } from './actions';
import { Destination } from '../../models/destination';

export interface DestinationsState {
  destinations: Destination[];
  isLoading: boolean;
  error: any;
}

export const destinationsInitialState: DestinationsState = {
  destinations: [],
  isLoading: false,
  error: undefined,
};

const destinationsSlice = createSlice({
  name: 'destinations',
  initialState: destinationsInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(GetDestinations.base, (state) => {
        state.isLoading = true;
      })
      .addCase(GetDestinations.successAction, (state, { payload }) => {
        state.isLoading = false;
        state.destinations = payload;
      })
      .addCase(GetDestinations.failureAction, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const destinationsReducer = destinationsSlice.reducer;
