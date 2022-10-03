import { FC } from 'react';
import { useFormik } from 'formik';

import { EMPTY_STRING } from 'config/constants';
import { useAuthenticate } from 'api/auth';

import SignInForm from './SignInForm';
import { ISignInFormValues, SignInFormField } from './types';
import { formValidationSchema } from './validation/schemas';

const SignInFormContainer: FC = () => {
  const { mutate: authenticateMutate, error } = useAuthenticate();

  const handleAuthenticate = (signInPayload: ISignInFormValues) =>
    authenticateMutate(signInPayload);

  const formik = useFormik({
    initialValues: {
      [SignInFormField.EMAIL]: EMPTY_STRING,
      [SignInFormField.PASSWORD]: EMPTY_STRING,
      [SignInFormField.REMEMBER]: false,
    },
    validationSchema: formValidationSchema,
    onSubmit: handleAuthenticate,
    validateOnBlur: false,
    validateOnChange: false,
  });

  return (
    <SignInForm
      formik={formik}
      errorMessage={error?.response?.data?.message || error?.message}
    />
  );
};

export default SignInFormContainer;
