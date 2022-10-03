import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const NoDealersWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
});

export const NoDealersText = styled('span')({
  marginTop: '21px',
  marginBottom: '24px',
  color: COLORS.gray700,
  fontSize: '18px',
  fontWeight: 500,
});
