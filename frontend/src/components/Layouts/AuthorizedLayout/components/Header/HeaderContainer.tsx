import { FC } from 'react';

import { useSetHeaderTitle } from 'hooks';

import Header from './Header';

const HeaderContainer: FC = () => {
  const { title, backLinkPath } = useSetHeaderTitle();

  return <Header headerTitle={title} backLinkPath={backLinkPath} />;
};

export default HeaderContainer;
