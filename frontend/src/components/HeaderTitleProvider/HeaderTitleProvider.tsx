import { FC, useState } from 'react';

import HeaderTitleContext from 'contexts';
import { EMPTY_STRING } from 'config/constants';

import { IHeaderTitleProvider } from './types';

const HeaderTitleProvider: FC<IHeaderTitleProvider> = ({ children }) => {
  const [title, setTitle] = useState(EMPTY_STRING);
  const [backLinkPath, setBackLinkPath] = useState(EMPTY_STRING);

  return (
    <HeaderTitleContext.Provider
      value={{ title, setTitle, backLinkPath, setBackLinkPath }}
    >
      {children}
    </HeaderTitleContext.Provider>
  );
};

export default HeaderTitleProvider;
