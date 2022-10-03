import { Menu, Layout } from 'antd';
import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

const { Sider } = Layout;

export const StyledMenu = styled(Menu)({
  marginTop: '33px',
  border: 'none',
  '&.ant-menu-vertical > .ant-menu-item': {
    display: 'flex',
    alignItems: 'center',
    borderRadius: '8px',
    marginTop: 0,
    height: '48px',
    '&.ant-menu-item:not(:last-child)': {
      marginBottom: 0,
    },
    '&.ant-menu-item svg': {
      fill: COLORS.gray400,
    },
    '&.ant-menu-item a': {
      color: COLORS.gray400,
      fontWeight: 500,
      letterSpacing: '0.2px',
    },
    '&:hover': {
      background: COLORS.gray50,
    },
    '&.ant-menu-item-selected': {
      background: COLORS.blue50,
      '&.ant-menu-item a': {
        color: COLORS.blue500,
        fontWeight: 800,
      },
      '&.ant-menu-item svg': {
        fill: COLORS.blue500,
      },
    },
    '&.ant-menu-item .ant-menu-item-icon + span': {
      marginLeft: '14px',
    },
  },
});

export const SiderWrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  height: '100vh',
  padding: '28px 16px 0',
  border: `1px solid ${COLORS.gray100}`,
});

export const LogoWrapper = styled('div')({
  padding: '0 12px',
});

export const LogoutWrapper = styled('div')({
  margin: '43px 19px',
  width: '90px',
});

export const InnerWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  svg: {
    stroke: COLORS.gray400,
  },
  '&:hover': {
    svg: {
      stroke: COLORS.gray600,
    },
  },
});

export const LogoutLink = styled('a')({
  marginLeft: '15px',
  color: COLORS.gray400,
  letterSpacing: '0.2px',
  fontWeight: 500,
  transition: 'none',
  '&:hover': {
    color: COLORS.gray600,
  },
});

export const StyledSider = styled(Sider)({
  backgroundColor: COLORS.white,
});
