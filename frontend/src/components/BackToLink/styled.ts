import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { LeftCircleOutlined } from '@ant-design/icons';

export const StyledLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
  marginRight: '20px',
});

export const StyledLinkText = styled('span')({
  lineHeight: 1,
});

export const StyledLeftCircleOutlined = styled(LeftCircleOutlined)({
  marginRight: '10px',
  '& svg': {
    width: '18px',
    height: '18px',
  },
});
