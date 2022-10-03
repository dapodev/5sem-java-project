import { DebouncedFunc } from 'lodash';
import { BaseSyntheticEvent, Dispatch, SetStateAction } from 'react';

export interface ISearchInputContainerProps {
  onPressEnter: ({ target }: BaseSyntheticEvent) => void;
  debounceOnChange: DebouncedFunc<({ target }: BaseSyntheticEvent) => void>;
  value?: string;
}

export interface ISearchInputProps
  extends Pick<ISearchInputContainerProps, 'onPressEnter' | 'value'> {
  inputState: string;
  setSearchInputValue?: Dispatch<SetStateAction<string>>;
  searchInputValue?: string;
  handleChange?: ({ target }: BaseSyntheticEvent) => void;
}
