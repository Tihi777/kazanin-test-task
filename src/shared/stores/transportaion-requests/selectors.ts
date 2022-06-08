import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';

const selectTransportationRequestsState = createSelector(
  (state: RootState) => state,
  ({ transportationRequestsState }) => transportationRequestsState
);

export const selectTransportationRequests = createSelector(
  selectTransportationRequestsState,
  ({ transportationRequests }) => transportationRequests
);

export const selectTransportationRequestsIsLoading = createSelector(selectTransportationRequestsState, ({ isLoading }) => isLoading);
