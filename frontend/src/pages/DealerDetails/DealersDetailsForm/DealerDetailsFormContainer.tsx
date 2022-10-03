import { FC } from 'react';
import { useFormik } from 'formik';

import DealerDetailsForm from './DealerDetailsForm';
import { INITIAL_DEALER_DETAILS_FORM_VALUES, SUBMIT_MESSAGE } from './constants';

const DealerDetailsFormContainer: FC = () => {
  const formik = useFormik({
    initialValues: INITIAL_DEALER_DETAILS_FORM_VALUES, 
    // will be implemented in the add dealer ticket
    onSubmit: () => {
      console.log(SUBMIT_MESSAGE);
    },
    validateOnBlur: false,
    validateOnChange: false,
  });

  return <DealerDetailsForm formik={formik} />;
};

export default DealerDetailsFormContainer;
