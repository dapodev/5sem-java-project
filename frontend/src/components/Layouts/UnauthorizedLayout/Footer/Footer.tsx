import { FC } from 'react';
import { UNAUTHORIZED_LAYOUT_TEXT } from '../constants';

import { FooterTip, FooterWrapper } from './styled';

const Footer: FC = () => (
  <FooterWrapper>
    <FooterTip>{UNAUTHORIZED_LAYOUT_TEXT.RIGHTS_MESSAGE}</FooterTip>
    <FooterTip>{UNAUTHORIZED_LAYOUT_TEXT.CALL_MESSAGE}</FooterTip>
  </FooterWrapper>
);

export default Footer;
