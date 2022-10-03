import { FC } from 'react';

import {
  DefaultInput,
  PasswordInput,
  MAX_EMAIL_LENGTH,
} from 'components/Inputs';
import { APP_ROUTE } from 'constants/appRoutes';
import { ALERT_TYPE } from 'components/Alert';

import {
  ForgotPasswordLink,
  FormFooter,
  SignInButton,
  SignInFormWrapper,
  Checkbox,
  EmailInputWrapper,
  PasswordInputWrapper,
  StyledAlert,
} from './styled';
import { ISignInFormProps, SignInFormField } from './types';
import { SIGN_IN_FORM_TEXT } from './constants';

const SignInForm: FC<ISignInFormProps> = ({ formik, errorMessage }) => {
  const { values, errors, handleSubmit, getFieldProps } = formik;

  return (
    <SignInFormWrapper onSubmit={handleSubmit}>
      {errorMessage && (
        <StyledAlert type={ALERT_TYPE.ERROR} message={errorMessage} />
      )}
      <EmailInputWrapper>
        <DefaultInput
          labelText={SIGN_IN_FORM_TEXT.EMAIL_LABEL}
          errorMessage={errors[SignInFormField.EMAIL]}
          maxLength={MAX_EMAIL_LENGTH}
          {...getFieldProps(SignInFormField.EMAIL)}
        />
      </EmailInputWrapper>
      <PasswordInputWrapper>
        <PasswordInput
          errorMessage={errors[SignInFormField.PASSWORD]}
          labelText={SIGN_IN_FORM_TEXT.PASSWORD_LABEL}
          {...getFieldProps(SignInFormField.PASSWORD)}
        />
      </PasswordInputWrapper>
      <FormFooter>
        <Checkbox
          {...getFieldProps(SignInFormField.REMEMBER)}
          checked={values[SignInFormField.REMEMBER]}
        >
          {SIGN_IN_FORM_TEXT.REMEMBER_ME}
        </Checkbox>
        <ForgotPasswordLink to={APP_ROUTE.forgotPassword}>
          {SIGN_IN_FORM_TEXT.FORGOT_PASSWORD}
        </ForgotPasswordLink>
      </FormFooter>
      <SignInButton htmlType='submit'>
        {SIGN_IN_FORM_TEXT.SIGN_IN_BUTTON_TEXT}
      </SignInButton>
    </SignInFormWrapper>
  );
};

export default SignInForm;
