import { FC } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import { IHelmetPageTitleContainerProps } from './types';

const HelmetPageTitle: FC<IHelmetPageTitleContainerProps> = ({
  title,
  children,
}) => (
  <HelmetProvider>
    <Helmet>
      <title>{title}</title>
    </Helmet>
    {children}
  </HelmetProvider>
);

export default HelmetPageTitle;
