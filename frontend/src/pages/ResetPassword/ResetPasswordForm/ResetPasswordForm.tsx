import { FC } from 'react';

import { PasswordInput } from 'components/Inputs';
import CustomAlert from 'components/CustomAlert';

import { StyledCustomAlert, StyledForm, StyledButton } from './styled';
import { RESET_PASSWORD_TEXT, LINK_EXPIRED_SUBSTRING } from '../constants';
import { IResetPasswordFormProps, ResetPasswordField } from '../types';

const ResetPasswordForm: FC<IResetPasswordFormProps> = ({
  formik,
  resetPasswordErrorMessage,
  checkResetExpiredErrorMessage,
  isResetPasswordError,
  isCheckResetExpiredError,
  isResetPasswordLoading,
}) => {
  const { errors, getFieldProps, handleSubmit } = formik;

  const isLinkExpiredMessage =
    resetPasswordErrorMessage &&
    resetPasswordErrorMessage.includes(LINK_EXPIRED_SUBSTRING);

  return (
    <>
      {isCheckResetExpiredError || isLinkExpiredMessage ? (
        <CustomAlert
          type='error'
          message={checkResetExpiredErrorMessage || resetPasswordErrorMessage}
        />
      ) : (
        <>
          {isResetPasswordError && !isLinkExpiredMessage && (
            <StyledCustomAlert
              type='error'
              message={resetPasswordErrorMessage}
            />
          )}
          <StyledForm onSubmit={handleSubmit}>
            <PasswordInput
              withPopover
              labelText={RESET_PASSWORD_TEXT.passwordLabel}
              errorMessage={errors.password}
              {...getFieldProps(ResetPasswordField.password)}
            />
            <PasswordInput
              labelText={RESET_PASSWORD_TEXT.confirmPasswordLabel}
              errorMessage={errors.confirmPassword}
              {...getFieldProps(ResetPasswordField.confirmPassword)}
            />
            <StyledButton
              htmlType='submit'
              size='large'
              loading={isResetPasswordLoading}
            >
              {!isResetPasswordLoading && RESET_PASSWORD_TEXT.resetButtonText}
            </StyledButton>
          </StyledForm>
        </>
      )}
    </>
  );
};

export default ResetPasswordForm;
