import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const HeaderWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '80px',
  background: COLORS.white,
  fontFamily: 'Poppins, sans-serif',
  border: `1px solid ${COLORS.gray100}`,
  borderLeft: 'none',
});

export const HeaderTitle = styled('p')({
  margin: 0,
  color: COLORS.gray700,
  fontSize: '24px',
  fontWeight: 600,
});

export const HeaderTitleWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '26px 0 20px 35px',
});

export const UserInfoWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  padding: '26px 32px 22px 0',
  color: COLORS.gray900,
});

export const UserRole = styled('p')({
  margin: '0 14px 0 8px',
  textTransform: 'capitalize',
});

export const UserName = styled('p')({
  margin: 0,
});
