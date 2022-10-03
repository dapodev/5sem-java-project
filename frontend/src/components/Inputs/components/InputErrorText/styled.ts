import styled from 'styled-components';
import { InfoCircleOutlined } from '@ant-design/icons';

import { COLORS } from 'constants/colorPalette';

export const MessageWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '4px',
});

export const StyledText = styled('span')({
  paddingLeft: '4px',
  fontFamily: 'Poppins, sans-serif',
  lineHeight: 1,
  color: COLORS.red500,
});

export const StyledInfoCircleIcon = styled(InfoCircleOutlined)({
  color: COLORS.red500,
});
