import { FC, useEffect } from 'react';

import { Split } from '@geoffcox/react-splitter';
import { Map } from '../../shared/components';
import { TransportationRequests } from './components/transportation-requests/transportation-requests';
import { useAppDispatch, useAppSelector } from '../../shared/stores/hooks';
import {
  GetTransportationRequests,
  selectActiveTransportationRequest,
  selectActiveTransportationRequestWaypoints,
  selectTransportationRequests,
} from '../../shared/stores/transportaion-requests';
import { GetDestinations, selectDestinations } from '../../shared/stores/destinations';

export const TransportationRequestsPage: FC = () => {
  const destinations = useAppSelector(selectDestinations);
  const activeTransportationRequest = useAppSelector(selectActiveTransportationRequest);
  const activeTransportationRequestWaypoints = useAppSelector(selectActiveTransportationRequestWaypoints);
  const transportationRequests = useAppSelector(selectTransportationRequests);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetTransportationRequests.base());
    dispatch(GetDestinations.base());
  }, []);

  return (
    <Split initialPrimarySize="40%" minPrimarySize="500px" minSecondarySize="50px" resetOnDoubleClick>
      <TransportationRequests
        transportationRequests={transportationRequests}
        activeTransportationRequest={activeTransportationRequest}
        destinations={destinations}
      />
      <Map destinations={destinations} waypoints={activeTransportationRequestWaypoints} />
    </Split>
  );
};
