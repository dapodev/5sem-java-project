import { DebouncedFunc } from 'lodash';
import { BaseSyntheticEvent } from 'react';

import { IDealersProps, TDealer } from '../types';

export interface IDealersListProps
  extends Pick<IDealersProps, 'page' | 'setPage'> {
  query: string;
  onPressEnter: ({ target }: BaseSyntheticEvent) => void;
  debounceOnChange: DebouncedFunc<({ target }: BaseSyntheticEvent) => void>;
  dealers?: TDealer[];
}
