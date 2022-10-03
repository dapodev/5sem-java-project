import { COLORS } from 'constants/colorPalette';
import styled from 'styled-components';

export const SearchWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
});

export const DealersContainer = styled('div')({
  flex: '1 1 auto',
});

export const DealersWrapper = styled('div')({
  display: 'flex',
  flexWrap: 'wrap',
  gap: '25px',
});

export const PaginationWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'center',
});

export const StyledText = styled('span')({
  display: 'flex',
  justifySelf: 'flex-start',
  alignSelf: 'flex-start',
  marginTop: '19px',
  marginBottom: '37px',
  fontFamily: 'Poppins, sans-serif',
  fontSize: '24px',
  fontWeight: '600',
  color: COLORS.gray800,
});
