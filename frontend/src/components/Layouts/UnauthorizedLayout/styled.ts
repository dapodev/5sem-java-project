import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';
import { Spin } from 'antd';

export const LayoutWrapper = styled('div')({
  display: 'flex',
  minHeight: '100vh',
});

export const ContentPanel = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  flexBasis: '100%',
  justifyContent: 'space-between',
  padding: '40px 40px 40px 80px',
  backgroundColor: COLORS.white,
});

export const PageLoader = styled(Spin)({
  width: '100%',
  textAlign: 'center',
});
