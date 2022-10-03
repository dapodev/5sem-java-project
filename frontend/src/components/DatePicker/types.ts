import { InputProps as IAntdInputProps } from 'antd';

export interface IDatePickerProps extends IAntdInputProps {
  labelText: string;
  errorMessage?: string;
}
