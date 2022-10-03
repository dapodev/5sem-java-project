import { FC } from 'react';
import { useNavigate } from 'react-router';

import { APP_ROUTE } from 'constants/appRoutes';

import ViewDealerButton from './ViewDealerButton';
import { IViewDealerButtonContainerProps } from './types';

const ViewDealerButtonContainer: FC<IViewDealerButtonContainerProps> = ({
  dealerId,
}) => {
  const navigateTo = useNavigate();

  const handleViewDealerClick = () =>
    navigateTo(`${APP_ROUTE.dealers}/${dealerId}`);

  return <ViewDealerButton handleViewDealerClick={handleViewDealerClick} />;
};

export default ViewDealerButtonContainer;
