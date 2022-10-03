import { FC } from 'react';

import { StyledSubTitle } from './styled';
import { IPageSubtitleProps } from './types';

const PageSubtitle: FC<IPageSubtitleProps> = ({ children }) => (
  <StyledSubTitle>{children}</StyledSubTitle>
);

export default PageSubtitle;
