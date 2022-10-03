import { IDefaultInputProps } from '../types';

export type TSelectConfig = {
  option: string;
  value: string;
};

export interface IPhoneNumberInputProps extends IDefaultInputProps {
  countriesSelectConfig: TSelectConfig[];
}
