import { TButtonProps } from 'components/Button/types';

export type TAddDealerButtonContainerProps = TButtonProps;

export interface IAddDealerButtonProps extends TAddDealerButtonContainerProps {
  handleAddDealerClick: () => void;
}
