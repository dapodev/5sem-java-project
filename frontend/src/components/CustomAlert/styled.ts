import styled from 'styled-components';
import { Alert } from 'antd';
import { WarningOutlined, CheckCircleOutlined } from '@ant-design/icons';

import { TAlertColorConfig } from './types';

const IconsStyles = {
  marginRight: '10px',
  '& svg': {
    width: '18px',
    height: '18px',
  },
};

export const StyledWarningOutlined = styled(WarningOutlined)({
  ...IconsStyles,
});

export const StyledCheckOutlined = styled(CheckCircleOutlined)({
  ...IconsStyles,
});

export const StyledAlert = styled(Alert)<TAlertColorConfig>(
  ({ textColor }) => ({
    alignItems: 'flex-start',
    padding: '12px 18px',
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 500,
    '& .ant-alert-message': {
      color: textColor,
    },
  }),
);
