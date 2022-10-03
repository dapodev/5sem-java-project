import { InputProps as IAntdInputProps } from 'antd';

export interface IDefaultInputProps extends IAntdInputProps {
  labelText: string;
  errorMessage?: string;
}

export interface IPasswordInputProps extends IDefaultInputProps {
  withPopover?: boolean;
}
