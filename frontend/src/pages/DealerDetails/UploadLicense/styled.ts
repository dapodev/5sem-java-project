import { Button } from 'antd';
import styled from 'styled-components';

import { UploadOutlined } from '@ant-design/icons';

import { COLORS } from 'constants/colorPalette';

export const StyledButton = styled(Button)({
  borderColor: COLORS.gray300,
  color: COLORS.gray900,
  '&:hover': {
    color: COLORS.gray900,
  },
});

export const StyledUploadIcon = styled(UploadOutlined)({
  color: COLORS.gray400,
});

export const StyledList = styled('ul')({
  marginLeft: '30px',
  paddingLeft: '20px',
  fontSize: '12px',
});

export const UploadWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '18px',
});
