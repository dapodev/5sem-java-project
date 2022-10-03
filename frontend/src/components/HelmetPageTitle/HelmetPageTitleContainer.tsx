import { useEffect, FC } from 'react';

import { useSetHeaderTitle } from 'hooks';
import { EMPTY_STRING } from 'config/constants';

import { IHelmetPageTitleContainerProps } from './types';
import HelmetPageTitle from './HelmetPageTitle';

const HelmetPageTitleContainer: FC<IHelmetPageTitleContainerProps> = ({
  title,
  backLinkPath,
  headerTitle,
  children,
}) => {
  const headerText = headerTitle || title || EMPTY_STRING;
  const backToPath = backLinkPath || EMPTY_STRING;

  const { setTitle, setBackLinkPath } = useSetHeaderTitle();

  useEffect(() => {
    setTitle(headerText);
  }, [setTitle]);

  useEffect(() => {
    setBackLinkPath(backToPath);
  }, [setBackLinkPath]);

  return <HelmetPageTitle title={title}>{children}</HelmetPageTitle>;
};

export default HelmetPageTitleContainer;
