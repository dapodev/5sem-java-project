import { FC } from 'react';

import { StyledLink, StyledLeftCircleOutlined, StyledLinkText } from './styled';
import { IBackToLinkProps } from './types';

const BackToLink: FC<IBackToLinkProps> = ({
  linkPathTo,
  onClick,
  children,
  ...props
}) => (
  <StyledLink to={linkPathTo} onClick={onClick} {...props}>
    <StyledLeftCircleOutlined />
    <StyledLinkText>{children}</StyledLinkText>
  </StyledLink>
);

export default BackToLink;
