import { FC, useEffect } from 'react';

import { Split } from '@geoffcox/react-splitter';
import { Map } from '../../shared/components';
import { TransportationRequests } from './components/transportation-requests/transportation-requests';
import { useAppDispatch } from '../../shared/stores/hooks';
import { GetTransportationRequests } from '../../shared/stores/transportaion-requests';
import { GetDestinations } from '../../shared/stores/destinations';

export const TransportationRequestsPage: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(GetTransportationRequests.base());
    dispatch(GetDestinations.base());
  }, []);

  return (
    <Split initialPrimarySize="40%" minPrimarySize="300px" resetOnDoubleClick>
      <TransportationRequests />
      <Map />
    </Split>
  );
};
