import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const selectDestinationsState = createSelector(
  (state: RootState) => state,
  ({ destinationsState }) => destinationsState
);

export const selectDestinations = createSelector(selectDestinationsState, ({ destinations }) => destinations);

export const selectDestinationsIsLoading = createSelector(selectDestinationsState, ({ isLoading }) => isLoading);
