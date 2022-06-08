import { FC } from 'react';
import { Table } from 'antd';
import type { ColumnsType } from 'antd/lib/table';

import { TransportationRequest } from '../../../../shared/models/transportation-request';
import { Destination } from '../../../../shared/models/destination';
import { SelectableCell } from '../selectable-cell/selectable-cell';
import { useAppDispatch } from '../../../../shared/stores/hooks';
import { SelectTransportationRequest } from '../../../../shared/stores/transportaion-requests';

import './transportation-requests-table.scss';

interface TransportationRequestsTableProps {
  transportationRequests: TransportationRequest[];
  activeTransportationRequest?: TransportationRequest;
  destinations: Destination[];
}

export const TransportationRequestsTable: FC<TransportationRequestsTableProps> = ({
  transportationRequests,
  activeTransportationRequest,
  destinations,
}) => {
  const dispatch = useAppDispatch();

  const columns: ColumnsType<TransportationRequest> = [
    {
      title: 'Номер',
      dataIndex: 'id',
      key: 'id',
      render: (id) => `#${id}`,
    },
    {
      title: 'Маршрут',
      key: 'route',
      render: (_, { departurePlace, arrivalPlace }) => `${departurePlace.title} - ${arrivalPlace.title}`,
    },
    {
      title: 'Погрузка',
      dataIndex: 'departurePlace',
      render: (value) => <SelectableCell value={value.id} destinations={destinations} />,
    },
    {
      title: 'Разгрузка',
      dataIndex: ['arrivalPlace', 'title'],
      key: 'arrivalPlace',
    },
  ];

  const handleRowClick = (record: TransportationRequest) => () => {
    dispatch(SelectTransportationRequest(record.id));
  };

  return (
    <Table
      dataSource={transportationRequests}
      pagination={false}
      columns={columns}
      size="large"
      scroll={{ x: 300 }}
      rowClassName={(record) => (record.id === activeTransportationRequest?.id ? 'active-cell' : '')}
      onRow={(record, rowIndex) => {
        return {
          onClick: handleRowClick(record),
        };
      }}
    ></Table>
  );
};
