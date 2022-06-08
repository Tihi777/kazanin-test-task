import { FC } from 'react';
import { TransportationRequestsTable } from '../transportation-requests-table/transportation-requests-table';
import { useAppSelector } from '../../../../shared/stores/hooks';
import { selectActiveTransportationRequest, selectTransportationRequests } from '../../../../shared/stores/transportaion-requests';

import './transportation-requests.scss';
import { selectDestinations } from '../../../../shared/stores/destinations';

export const TransportationRequests: FC = () => {
  const transportationRequests = useAppSelector(selectTransportationRequests);
  const activeTransportationRequest = useAppSelector(selectActiveTransportationRequest);
  const destinations = useAppSelector(selectDestinations);

  return (
    <div className="transportation-requests">
      <h1 className="transportation-requests__title">Заявки на транспортировку</h1>
      <TransportationRequestsTable
        transportationRequests={transportationRequests}
        destinations={destinations}
        activeTransportationRequest={activeTransportationRequest}
      />
    </div>
  );
};
