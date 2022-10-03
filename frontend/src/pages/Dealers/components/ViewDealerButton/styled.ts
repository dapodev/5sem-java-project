import styled from 'styled-components';
import { RightOutlined } from '@ant-design/icons';

import Button from 'components/Button';

export const StyledButton = styled(Button)({
  width: '80px',
  padding: '6px 16px',
  fontWeight: 500,
});

export const StyledRightArrow = styled(RightOutlined)({
  lineHeight: 0,
  '& svg': {
    width: '12px',
    height: '14px',
  },
});
