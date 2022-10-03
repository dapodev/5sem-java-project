import { FC } from 'react';

import { getSlicedDealerName } from 'pages/Dealers/utils';
import { MAX_DEALER_NAME_LENGTH } from 'pages/Dealers/constants';

import {
  DealerBox,
  DealerLogo,
  DealerNameWrapper,
  DealerName,
  DealerNamePopover,
} from './styled';
import { IDealerCardProps } from './types';
import ViewDealerButton from '../ViewDealerButton';

const DealerCard: FC<IDealerCardProps> = ({ logo, companyName }) => {
  const isLargeName = companyName.length >= MAX_DEALER_NAME_LENGTH;

  const slicedName = getSlicedDealerName(companyName);

  return (
    <DealerBox>
      <DealerLogo backgroundImage={logo} />
      <div>
        {isLargeName ? (
          <DealerNameWrapper>
            <DealerName>{slicedName}</DealerName>
            <DealerNamePopover>{companyName}</DealerNamePopover>
          </DealerNameWrapper>
        ) : (
          <DealerName>{companyName}</DealerName>
        )}
        <ViewDealerButton dealerId={companyName} />
      </div>
    </DealerBox>
  );
};

export default DealerCard;
