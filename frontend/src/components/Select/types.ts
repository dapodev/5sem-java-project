import { SelectProps as IAntdSelectProps } from 'antd';

type TSelectConfig = {
  label: string;
  value: string | number;
};

export interface ISelectProps extends IAntdSelectProps {
  selectConfig: TSelectConfig[];
  value: string | number;
  labelText: string;
  errorMessage?: string;
}
