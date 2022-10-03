import { IAlertProps } from '../types';

export interface IMessageProps {
  type: IAlertProps['type'];
  message?: string;
}

export interface IMessageTextProps {
  type: IMessageProps['type'];
}
