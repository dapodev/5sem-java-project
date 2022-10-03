import { FC } from 'react';
import { AlertProps as IAlertProps } from 'antd';

import { getAlertDesignByType } from './utils';
import { StyledAlert } from './styled';

const CustomAlert: FC<IAlertProps> = ({ type = 'success', ...props }) => {
  const alertDesignProps = getAlertDesignByType(type);

  return <StyledAlert showIcon type={type} {...alertDesignProps} {...props} />;
};

export default CustomAlert;
