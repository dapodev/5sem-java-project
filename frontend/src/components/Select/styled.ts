import { Select as AntdSelect } from 'antd';
import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledSelect = styled(AntdSelect)({
  width: '100%',
  '.ant-select-selection-placeholder': {
    color: COLORS.gray900,
  },
});
