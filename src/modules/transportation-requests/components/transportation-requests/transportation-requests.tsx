import { FC } from 'react';
import { TransportationRequestsTable } from '../transportation-requests-table/transportation-requests-table';

import './transportation-requests.scss';
import { TransportationRequest } from '../../../../shared/models/transportation-request';
import { Destination } from '../../../../shared/models/destination';

interface TransportationRequestsTableProps {
  transportationRequests: TransportationRequest[];
  activeTransportationRequest?: TransportationRequest;
  destinations: Destination[];
}

export const TransportationRequests: FC<TransportationRequestsTableProps> = ({
  transportationRequests,
  destinations,
  activeTransportationRequest,
}) => {
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
