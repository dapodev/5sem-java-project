import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const FooterWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const FooterTip = styled('span')({
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 500,
  color: COLORS.gray500,
});
