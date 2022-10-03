import { FC } from 'react';
import { useNavigate } from 'react-router';

import { APP_ROUTE } from 'constants/appRoutes';

import AddDealerButton from './AddDealerButton';
import { TAddDealerButtonContainerProps } from './types';

const AddDealerButtonContainer: FC<TAddDealerButtonContainerProps> = (
  props,
) => {
  const navigateTo = useNavigate();

  const handleAddDealerClick = () => navigateTo(APP_ROUTE.addDealer);

  return (
    <AddDealerButton handleAddDealerClick={handleAddDealerClick} {...props} />
  );
};

export default AddDealerButtonContainer;
