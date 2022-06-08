import { FC } from 'react';
import { Select } from 'antd';

import { Destination } from '../../../../shared/models/destination';

interface SelectableCellProps {
  value: number;
  destinations: Destination[];
  onChange(destinationId: number): void;
}

export const SelectableCell: FC<SelectableCellProps> = ({ value, destinations, onChange }) => {
  return (
    <Select defaultValue={value} onChange={onChange} style={{ width: 150 }}>
      {destinations.map(({ id, title }) => (
        <Select.Option key={id} value={id}>
          {title}
        </Select.Option>
      ))}
    </Select>
  );
};
