import styled from 'styled-components';
import { Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

import { COLORS } from 'constants/colorPalette';

export const SearchInputWrapper = styled('div')({
  position: 'relative',
});

export const StyledSearchIcon = styled(SearchOutlined)({
  position: 'absolute',
  zIndex: 2,
  top: '50%',
  left: '28px',
  transform: 'translate(-50%, -50%)',
  '& svg': {
    color: COLORS.gray900,
    width: '16px',
    height: '16px',
  },
});

export const StyledInput = styled(Input)({
  height: '40px',
  maxWidth: '295px',
  paddingLeft: '48px',
  '& .ant-input-clear-icon': {
    color: COLORS.gray900,
    lineHeight: 0,
  },

  '& input': {
    fontWeight: 500,
    letterSpacing: '0.2px',
    '&::placeholder': {
      fontWeight: 500,
      fontSize: '14px',
      lineHeight: 1.5,
      color: COLORS.gray400,
    },
  },
});
