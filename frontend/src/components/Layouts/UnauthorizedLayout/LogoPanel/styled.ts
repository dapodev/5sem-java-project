import styled from 'styled-components';

import { LoginPageBackground } from 'assets/images';
import { COLORS } from 'constants/colorPalette';

import { TLogoContentWrapperProps } from '../types';

export const LogoContentWrapper = styled('div')<TLogoContentWrapperProps>(
  ({ isWithoutWelcomeMessage }) => ({
    ...(isWithoutWelcomeMessage && { justifyContent: 'center' }),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minWidth: '640px',
    padding: '0 80px',
    backgroundImage: `url(${LoginPageBackground})`,
    backgroundSize: 'cover',
  }),
);

export const ContentWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

export const DinarLockLogo = styled('img')({
  width: '210px',
  height: '35px',
});

export const WelcomeMessage = styled('p')({
  marginTop: '32px',
  fontFamily: 'Poppins, sans-serif',
  fontWeight: 600,
  fontSize: '50px',
  lineHeight: 1.3,
  whiteSpace: 'pre-line',
  color: COLORS.blue500,
});

export const BanknoteIcon = styled('img')({
  margin: '-48px -64px -96px',
});
