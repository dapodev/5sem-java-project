import { COLORS } from 'constants/colorPalette';
import { StatusTypes } from 'types/statusTypes';

import { StyledCheckOutlined, StyledWarningOutlined } from './styled';
import { IAlertDesignConfig } from './types';

export const getAlertDesignByType = (
  type: keyof typeof StatusTypes,
): IAlertDesignConfig => {
  const defaultDesignConfig = { icon: '' };

  const alertDesignConfig = {
    [StatusTypes.success]: {
      icon: <StyledCheckOutlined />,
      textColor: COLORS.green900,
    },
    [StatusTypes.error]: {
      icon: <StyledWarningOutlined />,
      textColor: COLORS.red500,
    },
    [StatusTypes.warning]: defaultDesignConfig,
    [StatusTypes.info]: defaultDesignConfig,
  };

  return alertDesignConfig[type];
};
