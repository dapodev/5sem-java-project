import { ReactNode } from 'react';

export interface IInputBaseProps {
  children: ReactNode;
  labelText: string;
  errorMessage?: string;
}
