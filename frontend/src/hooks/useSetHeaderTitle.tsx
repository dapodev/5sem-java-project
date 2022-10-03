import { useContext } from 'react';

import HeaderTitleContext from 'contexts';

const useSetHeaderTitle = () => useContext(HeaderTitleContext);

export default useSetHeaderTitle;
