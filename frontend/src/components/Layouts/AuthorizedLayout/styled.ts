import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const StyledLayout = styled(Layout)({
  height: '100vh',
});

export const StyledList = styled('ul')({
  display: 'flex',
  justifyContent: 'space-between',
  width: '600px',
  listStyleType: 'none',
});

export const StyledContent = styled(Content)({
  display: 'flex',
  height: '100%',
  maxHeight: '100%',
  overflow: 'scroll',
  '&::-webkit-scrollbar': {
    display: 'none',
  },
});
