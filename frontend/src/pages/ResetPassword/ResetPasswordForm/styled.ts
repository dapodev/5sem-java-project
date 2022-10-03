import styled from 'styled-components';

import Button from 'components/Button';
import CustomAlert from 'components/CustomAlert';

export const StyledForm = styled('form')({
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
});

export const StyledButton = styled(Button)({
  alignSelf: 'flex-start',
  minWidth: '146px',
  marginTop: '12px',
});

export const StyledCustomAlert = styled(CustomAlert)({
  marginBottom: '34px',
});
