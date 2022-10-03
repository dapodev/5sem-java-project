import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { COLORS } from 'constants/colorPalette';

export const LinkTo = styled(Link)({
  fontFamily: 'Manrope, sans-serif',
  fontWeight: 500,
  fontSize: '18px',
  color: COLORS.blue500,
  
  '&:hover': {
    textDecoration: 'underline',
  },
});
