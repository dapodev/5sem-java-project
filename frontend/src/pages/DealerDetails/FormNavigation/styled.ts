import { Menu } from 'antd';
import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

export const StyledMenu = styled(Menu)({
  background: 'transparent',
  width: '224px',
  marginTop: '33px',
  border: 'none',
  '&.ant-menu-vertical > .ant-menu-item': {
    display: 'flex',
    alignItems: 'center',
    marginTop: 0,
    height: '48px',
    '&.ant-menu-item:not(:last-child)': {
      marginBottom: 0,
    },
    '&.ant-menu-item': {
      color: COLORS.gray500,
      fontWeight: 400,
      fontSize: '16px',
    },
    '&.ant-menu-item-selected': {
      background: 'transparent',
      color: COLORS.gray900,
      fontWeight: 700,
      fontSize: '18px',
      letterSpacing: '0.2px',
    },
    '&.ant-menu-item .ant-menu-item-icon + span': {
      marginLeft: '14px',
    },
  },
});
