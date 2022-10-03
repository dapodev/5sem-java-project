import { ReactNode } from 'react';

export interface IAlertDesignConfig {
  icon: ReactNode | string;
  textColor?: string;
}

export type TAlertColorConfig = Pick<IAlertDesignConfig, 'textColor'>;
