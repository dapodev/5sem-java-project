import { FC } from 'react';

import { LinkTo } from './styled';
import { ILinkProps } from './types';

const Link: FC<ILinkProps> = ({ to, children, className }) => (
  <LinkTo to={to} className={className}>
    {children}
  </LinkTo>
);

export default Link;
