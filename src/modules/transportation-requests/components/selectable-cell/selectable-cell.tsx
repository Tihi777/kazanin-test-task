import { FC } from 'react';
import { Select } from 'antd';
import { Destination } from '../../../../shared/models/destination';

interface SelectableCellProps {
  value: number;
  destinations: Destination[];
}

export const SelectableCell: FC<SelectableCellProps> = ({ value, destinations }) => {
  return (
    <Select defaultValue={value}>
      {destinations.map(({ id, title }) => (
        <Select.Option key={id} value={id} disabled={id === value}>
          {title}
        </Select.Option>
      ))}
    </Select>
  );
};
