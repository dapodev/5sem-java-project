import { FC } from 'react';

import { Banknote, DinarLockLogoImage } from 'assets/vectors';

import {
  BanknoteIcon,
  DinarLockLogo,
  LogoContentWrapper,
  ContentWrapper,
  WelcomeMessage,
} from './styled';
import { UNAUTHORIZED_LAYOUT_TEXT } from '../constants';
import { TLogoPanelProps } from '../types';

const LogoPanel: FC<TLogoPanelProps> = ({ isWithoutWelcomeMessage }) => (
  <LogoContentWrapper isWithoutWelcomeMessage={isWithoutWelcomeMessage}>
    {isWithoutWelcomeMessage ? (
      <ContentWrapper>
        <img src={Banknote} />
        <DinarLockLogo src={DinarLockLogoImage} />
      </ContentWrapper>
    ) : (
      <div>
        <DinarLockLogo src={DinarLockLogoImage} />
        <WelcomeMessage>
          {UNAUTHORIZED_LAYOUT_TEXT.WELCOME_MESSAGE}
        </WelcomeMessage>
        <BanknoteIcon src={Banknote} />
      </div>
    )}
  </LogoContentWrapper>
);

export default LogoPanel;
