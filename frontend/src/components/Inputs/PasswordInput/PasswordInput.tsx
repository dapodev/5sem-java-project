import { FC } from 'react';
import { Popover } from 'antd';
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';

import { COLORS } from 'constants/colorPalette';

import PopoverContent from './PopoverContent';
import InputBase from '../components';
import { StyledInput } from '../styled';
import { IPasswordInputProps } from '../types';
import { MAX_PASSWORD_LENGTH } from '../constants';

const PasswordInput: FC<IPasswordInputProps> = ({
  withPopover,
  labelText,
  errorMessage,
  ...props
}) => {
  const PasswordInputLayout = (
    <StyledInput.Password
      size='large'
      maxLength={MAX_PASSWORD_LENGTH}
      iconRender={(visible) =>
        visible ? (
          <EyeTwoTone
            twoToneColor={errorMessage ? COLORS.red500 : COLORS.blue500}
          />
        ) : (
          <EyeInvisibleOutlined />
        )
      }
      status={errorMessage && 'error'}
      {...props}
    />
  );

  return (
    <InputBase labelText={labelText} errorMessage={errorMessage}>
      <>
        {withPopover ? (
          <Popover
            content={<PopoverContent />}
            trigger='focus'
            placement='topLeft'
          >
            {PasswordInputLayout}
          </Popover>
        ) : (
          PasswordInputLayout
        )}
      </>
    </InputBase>
  );
};

export default PasswordInput;
