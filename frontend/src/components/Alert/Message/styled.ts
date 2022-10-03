import styled from 'styled-components';

import { COLORS } from 'constants/colorPalette';

import { IMessageTextProps } from './types';
import { ALERT_TYPE } from '../constants';

export const StyledMessage = styled('span')(({ type }: IMessageTextProps) => ({
  ...(type === ALERT_TYPE.SUCCESS && {
    color: COLORS.green900,
  }),
  ...(type === ALERT_TYPE.ERROR && {
    color: COLORS.red500,
  }),
  ...(type === ALERT_TYPE.WARNING && {
    color: COLORS.primary600,
  }),
}));
