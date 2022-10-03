import { FC } from 'react';
import { Select as AntdSelect } from 'antd';

import InputBase from 'components/Inputs/components/InputBase';

import { ISelectProps } from './types';
import { StyledSelect } from './styled';

const { Option } = AntdSelect;

const Select: FC<ISelectProps> = ({
  selectConfig,
  labelText,
  errorMessage,
  value,
  placeholder,
}) => (
  <InputBase labelText={labelText} errorMessage={errorMessage}>
    <StyledSelect value={value} placeholder={placeholder}>
      {selectConfig.map(({ value, label }) => (
        <Option key={value} value={value}>
          {label}
        </Option>
      ))}
    </StyledSelect>
  </InputBase>
);

export default Select;
