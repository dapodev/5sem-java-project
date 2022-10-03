import styled from 'styled-components';

import { noLogo } from 'assets/images';
import { COLORS } from 'constants/colorPalette';

import { TDealerLogo } from './types';

export const DealerBox = styled('div')({
  display: 'flex',
  gap: '20px',
  width: '260px',
  maxHeight: '120px',
  padding: '20px',
  background: COLORS.white,
  borderRadius: '8px',
});

export const DealerLogo = styled('div')<TDealerLogo>(({ backgroundImage }) => ({
  width: '46px',
  height: '46px',
  border: `1px solid ${COLORS.gray200}`,
  borderRadius: '8px',
  background: `no-repeat center url(${backgroundImage || noLogo}) ${
    COLORS.white
  }`,
}));

export const DealerNameWrapper = styled('div')({
  position: 'relative',
  '&:hover': {
    cursor: 'pointer',
    '& p': {
      visibility: 'visible',
      opacity: 1,
    },
  },
});

export const DealerNamePopover = styled('p')({
  position: 'absolute',
  zIndex: '2',
  bottom: '-6px',
  left: '-10px',
  width: '180px',
  padding: '4px 8px',
  marginBottom: 0,
  fontWeight: 500,
  color: COLORS.gray900,
  background: COLORS.gray200,
  borderRadius: '4px',
  transform: 'translateY(100%)',
  opacity: 0,
  visibility: 'hidden',
  transition: '.2s',
});

export const DealerName = styled('h3')({
  position: 'relative',
  zIndex: 2,
  display: 'flex',
  alignItems: 'center',
  maxWidth: '124px',
  minHeight: '42px',
  marginBottom: '8px',
  fontSize: '14px',
  fontWeight: 800,
  lineHeight: 1.5,
  color: COLORS.gray900,
  wordBreak: 'break-all',
});
