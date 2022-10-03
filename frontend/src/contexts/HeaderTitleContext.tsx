import { createContext } from 'react';

import { EMPTY_STRING } from 'config/constants';

import { IHeaderTitleContext } from './types';

const CONTEXT_INITIAL_VALUES = {
  title: EMPTY_STRING,
  setTitle: () => null,
  backLinkPath: EMPTY_STRING,
  setBackLinkPath: () => null,
};

const HeaderTitleContext = createContext<IHeaderTitleContext>(
  CONTEXT_INITIAL_VALUES,
);

export default HeaderTitleContext;
