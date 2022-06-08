import { FC } from 'react';

import { Split } from '@geoffcox/react-splitter';
import { Map } from '../../shared/components';
import { TransportationRequests } from './components/transportation-requests/transportation-requests';

export const TransportationRequestsPage: FC = () => {
  return (
    <Split initialPrimarySize="40%" minPrimarySize="300px" resetOnDoubleClick>
      <TransportationRequests />
      <Map />
    </Split>
  );
};
