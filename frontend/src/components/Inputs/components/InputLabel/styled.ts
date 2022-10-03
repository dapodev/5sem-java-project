import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledLabel = styled('label')({
  display: 'block',
  color: COLORS.gray700,
  textAlign: 'left',
  fontFamily: 'Poppins, sans-serif',
  letterSpacing: '-0.02em',
  '& p': {
    marginBottom: '4px',
    '& span': {
      color: COLORS.red500,
    },
  },
});
