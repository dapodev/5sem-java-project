import {
  CheckCircleOutlined,
  CloseCircleOutlined,
  ExclamationCircleOutlined,
} from '@ant-design/icons';
import { FC } from 'react';

import Message from './Message';
import { ALERT_TYPE } from './constants';
import { StyledAlert } from './styled';
import { IAlertProps } from './types';

const Alert: FC<IAlertProps> = ({ type, message, ...props }) => (
  <StyledAlert
    type={type}
    message={<Message type={type} message={message} />}
    icon={
      type === ALERT_TYPE.ERROR ? (
        <CloseCircleOutlined />
      ) : type === ALERT_TYPE.SUCCESS ? (
        <CheckCircleOutlined />
      ) : (
        <ExclamationCircleOutlined />
      )
    }
    showIcon
    {...props}
  />
);

export default Alert;
