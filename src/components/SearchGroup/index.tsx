import React from 'react'

import * as S from './styles'

interface Props {
  onChangeInput: (value: string) => void
  onChangeSelect: (value: string) => void
}

const SearchGroup: React.FC<Props> = ({ onChangeInput, onChangeSelect }) => {
  return (
    <S.Container>
      <label htmlFor='search'>Search</label>
      <S.Input
        type='text'
        onChange={(e) => onChangeInput(e.target.value)}
        placeholder='Search...'
        id='search'
      />
      <S.Select onChange={(e) => onChangeSelect(e.target.value)} data-testid="select">
        <option value='all'>All</option>
        <option value='infecteds'>Infecteds</option>
      </S.Select>
    </S.Container>
  )
}

export default SearchGroup
