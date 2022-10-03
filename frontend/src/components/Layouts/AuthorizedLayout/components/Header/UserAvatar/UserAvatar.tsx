import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { FC } from 'react';

import { USER } from 'constants/mocks';
import { AVATAR_SIZE } from 'constants/menu';

const UserAvatar: FC = () => (
  <Avatar
    size={AVATAR_SIZE}
    icon={USER.avatar ? <img src={USER.avatar} /> : <UserOutlined />}
  />
);

export default UserAvatar;
