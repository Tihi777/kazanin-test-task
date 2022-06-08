import { createSelector } from '@reduxjs/toolkit';

import { RootState } from '../store';
import { Destination } from '../../models/destination';

const selectTransportationRequestsState = createSelector(
  (state: RootState) => state,
  ({ transportationRequestsState }) => transportationRequestsState
);

export const selectTransportationRequests = createSelector(
  selectTransportationRequestsState,
  ({ transportationRequests }) => transportationRequests
);

export const selectTransportationRequestsIsLoading = createSelector(selectTransportationRequestsState, ({ isLoading }) => isLoading);

export const selectActiveTransportationRequest = createSelector(
  selectTransportationRequestsState,
  ({ selectedTransportationRequests }) => selectedTransportationRequests
);

export const selectActiveTransportationRequestWaypoints = createSelector(
  selectTransportationRequestsState,
  ({ selectedTransportationRequests }) =>
    selectedTransportationRequests
      ? ([selectedTransportationRequests.departurePlace, selectedTransportationRequests.arrivalPlace] as [Destination, Destination])
      : undefined
);
