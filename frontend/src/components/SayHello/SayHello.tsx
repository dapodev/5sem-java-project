import { FC } from 'react';

import { ISayHello } from './types';

const SayHello: FC<ISayHello> = ({ helloMessage }) => {
  return (
    <>
      <h3>{helloMessage || 'Loading..'}</h3>
    </>
  );
};

export default SayHello;
