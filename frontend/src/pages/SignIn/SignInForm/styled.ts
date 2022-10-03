import styled from 'styled-components';
import { Checkbox as AntdCheckbox } from 'antd';

import Button from 'components/Button';
import { Link } from 'components/Link';
import { COLORS } from 'constants/colorPalette';
import { Alert } from 'components/Alert';

export const SignInFormWrapper = styled('form')({
  fontFamily: 'Poppins, sans-serif',
});

export const EmailInputWrapper = styled('div')({
  marginTop: '35px',
});

export const PasswordInputWrapper = styled('div')({
  marginTop: '20px',
});

export const FormFooter = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginTop: '32px',
});

export const Checkbox = styled(AntdCheckbox)({
  fontWeight: 500,
  color: COLORS.gray700,
});

export const ForgotPasswordLink = styled(Link)({
  fontFamily: 'Poppins, sans-serif',
  fontSize: '14px',
  fontWeight: 500,
  lineHeight: 1.4,
  color: COLORS.blue500,
});

export const SignInButton = styled(Button)({
  display: 'flex',
  alignItems: 'center',
  padding: '24px 22px',
  marginTop: '32px',
  fontWeight: 500,
});

export const StyledAlert = styled(Alert)({
  margin: '32px 0',
});

