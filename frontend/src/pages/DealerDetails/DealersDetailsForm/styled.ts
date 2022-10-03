import styled from 'styled-components';
import { Divider } from 'antd';

import Button from 'components/Button';
import { COLORS } from 'constants/colorPalette';

export const DealerDetailsFormWrapper = styled('form')({
  width: '636px',
  fontFamily: 'Poppins, sans-serif',
});

export const FormFieldWrapper = styled('div')({
  marginTop: '20px',
});

export const SaveButton = styled(Button)({
  width: '136px',
  marginTop: '38px',
});

export const StyledTitle = styled('h1')({
  margin: '0 122px 34px 147px',
  fontSize: '18px',
  fontWeight: 700,
  color: COLORS.gray900,
});

export const StyledSubTitle = styled('h2')({
  marginTop: '32px',
  marginBottom: '34px',
  fontSize: '16px',
  fontWeight: 700,
  color: COLORS.gray900,
});

export const SectionWrapper = styled('div')({
  width: '100%',
  marginTop: '32px',
  padding: '26px 0 32px',
  background: COLORS.white,
  border: `1px solid ${COLORS.gray200}`,
  borderRadius: '8px',
});

export const SectionContent = styled('div')({
  paddingRight: '122px',
  paddingLeft: '147px',
});

export const SectionTitle = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  marginRight: '20px',
});

export const DeleteButton = styled(Button)({
  width: '121px',
  borderColor: COLORS.gray400,
  color: COLORS.gray700,
});

export const StyledDivider = styled(Divider)({
  borderColor: COLORS.gray500,
});