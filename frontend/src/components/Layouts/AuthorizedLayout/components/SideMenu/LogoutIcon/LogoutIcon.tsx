import Icon from '@ant-design/icons';
import type { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const LogoutSvg = () => (
  <svg
    width='22'
    height='22'
    viewBox='0 0 22 22'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
  >
    <path
      d='M8.25 19.25H4.58333C4.0971 19.25 3.63079 19.0568 3.28697 18.713C2.94315 18.3692 2.75 17.9029 2.75 17.4167V4.58333C2.75 4.0971 2.94315 3.63079 3.28697 3.28697C3.63079 2.94315 4.0971 2.75 4.58333 2.75H8.25'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M14.667 15.5834L19.2503 11L14.667 6.41669'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M19.25 11H8.25'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

const LogoutIcon = (props: Partial<CustomIconComponentProps>) => (
  <Icon component={LogoutSvg} {...props} />
);

export default LogoutIcon;
