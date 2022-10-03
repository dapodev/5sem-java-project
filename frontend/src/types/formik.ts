import {
  FormikHandlers as IFormikHandlers,
  FormikState as IFormikState,
  FormikHelpers as IFormikHelpers,
} from 'formik';

export type TFormikValues<Values> = IFormikHandlers & IFormikState<Values>;

export type TFormikOnSubmitProps<Values> = (
  values: Values,
  formikHelpers: IFormikHelpers<Values>,
) => void | Promise<void>;
