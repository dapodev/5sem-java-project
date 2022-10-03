import { FC } from 'react';

import { StyledTitle } from './styled';
import { IPageTitleProps } from './types';

const PageTitle: FC<IPageTitleProps> = ({ children }) => (
  <StyledTitle>{children}</StyledTitle>
);

export default PageTitle;
