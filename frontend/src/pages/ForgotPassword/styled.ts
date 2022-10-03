import styled from 'styled-components';

import BackToLink from 'components/BackToLink';
import Button from 'components/Button';
import { Alert } from 'components/Alert';

export const PageWrapper = styled('div')({
  maxWidth: '480px',
});

export const SendLinkButton = styled(Button)({
  width: '165px',
  marginTop: '32px',
});

export const StyledText = styled('p')({
  marginBottom: 0,
  fontFamily: 'Manrope, sans-serif',
  fontSize: '16px',
  fontWeight: 500,
});

export const ResendTextWrapper = styled('div')({
  marginTop: '20px',
});

export const ResendButtonWrapper = styled('div')({
  display: 'flex',
  alignItems: 'center',
  marginTop: '26px',
});

export const ResendButton = styled(Button)({
  marginLeft: '18px',
});

export const StyledAlert = styled(Alert)({
  marginTop: '24px',
  marginBottom: '26px',
  whiteSpace: 'pre-line',
});

export const StyledBackToLink = styled(BackToLink)({
  marginBottom: '10px',
});
