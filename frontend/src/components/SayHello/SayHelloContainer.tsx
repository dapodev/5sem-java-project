import { FC, useEffect, useState } from 'react';

import getHello from 'api/hello/getHello';
import SayHello from './SayHello';

const SayHelloContainer: FC = () => {
  const [message, setMessage] = useState('');

  useEffect(() => {
    getHello().then((data) => setMessage(String(data)));
  }, []);

  return <SayHello helloMessage={message} />;
};

export default SayHelloContainer;
