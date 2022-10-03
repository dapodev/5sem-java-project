import { DatePicker as AntDatePicker } from 'antd';
import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledDatePicker = styled(AntDatePicker)({
  width: '100%',
  '.ant-picker-input > input::placeholder': {
    color: COLORS.gray900,
  },
});
