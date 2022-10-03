import { MAX_DEALER_NAME_LENGTH, NULL_INDEX, ELLIPSIS } from './constants';

export const getSlicedDealerName = (name: string) =>
  name.slice(NULL_INDEX, MAX_DEALER_NAME_LENGTH).concat(ELLIPSIS);
