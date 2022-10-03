import { FC } from 'react';
import { CloseOutlined } from '@ant-design/icons';

import { DEALERS_PAGE_CONTENT } from 'pages/Dealers/constants';
import { MAX_SEARCH_LENGTH } from 'components/Inputs';

import { SearchInputWrapper, StyledSearchIcon, StyledInput } from './styled';
import { ISearchInputProps } from './types';

const SearchInput: FC<ISearchInputProps> = ({
  inputState,
  onPressEnter,
  handleChange,
}) => (
  <SearchInputWrapper>
    <StyledSearchIcon />
    <StyledInput
      value={inputState}
      allowClear={{ clearIcon: <CloseOutlined /> }}
      placeholder={DEALERS_PAGE_CONTENT.SEARCH_PLACEHOLDER}
      maxLength={MAX_SEARCH_LENGTH}
      onPressEnter={onPressEnter}
      onChange={handleChange}
    />
  </SearchInputWrapper>
);

export default SearchInput;
