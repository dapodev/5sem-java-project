import { EMPTY_STRING } from 'config/constants';
import { BaseSyntheticEvent, FC, useState } from 'react';

import SearchInput from './SearchInput';
import { ISearchInputContainerProps } from './types';

const SearchInputContainer: FC<ISearchInputContainerProps> = ({
  onPressEnter,
  debounceOnChange,
}) => {
  const [inputState, setInputState] = useState<string>(EMPTY_STRING);

  const handleChange = (event: BaseSyntheticEvent) => {
    const formattedInputValue = event.target.value.trimLeft();
    setInputState(formattedInputValue);

    if (formattedInputValue !== EMPTY_STRING) {
      debounceOnChange(event);
    } else {
      onPressEnter(event);
    }
  };

  return (
    <SearchInput
      inputState={inputState}
      onPressEnter={onPressEnter}
      handleChange={handleChange}
    />
  );
};

export default SearchInputContainer;
