import { FC } from 'react';

import HelmetPageTitle from 'components/HelmetPageTitle';
import { MENU_TITLE } from 'constants/menu';
import { APP_ROUTE } from 'constants/appRoutes';
import DealerDetailsForm from 'pages/DealerDetails/DealersDetailsForm';
import FormNavigation from 'pages/DealerDetails/FormNavigation';

import { PageWrapper } from './styled';

const DealerDetails: FC = () => (
  <HelmetPageTitle
    title={MENU_TITLE.dealerDetails}
    backLinkPath={APP_ROUTE.dealers}
  >
    <PageWrapper>
      <FormNavigation />
      <DealerDetailsForm />
    </PageWrapper>
  </HelmetPageTitle>
);

export default DealerDetails;
