import { Input as AntdInput } from 'antd';
import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledInput = styled(AntdInput)({
  fontFamily: 'Poppins, sans-serif',
  '&::placeholder': {
    color: COLORS.gray900,
  },
});
