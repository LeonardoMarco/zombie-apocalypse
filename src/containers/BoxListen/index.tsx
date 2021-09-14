import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import Card from '../../components/Card'
import SearchGroup from '../../components/SearchGroup'

import { InitialState } from '../../store/types'
import {
  changeInputSearch,
  changeSelectSearch,
  fetchPersonas,
} from '../../store/actions'

const BoxListen: React.FC = () => {
  const state = useSelector((state: InitialState) => state)
  const dispatch = useDispatch()

  const changeInput = (value: string) => dispatch(changeInputSearch(value))
  const changeSelect = (value: string) => dispatch(changeSelectSearch(value))

  function selectDetailPersona(id: number) {
    console.log(id)
  }

  useEffect(() => {
    dispatch(fetchPersonas())
  }, [])

  return (
    <S.Container>
      <SearchGroup onChangeInput={changeInput} onChangeSelect={changeSelect} />
      <Card dataPersonas={state.filtered} actionDetail={selectDetailPersona} />
    </S.Container>
  )
}

export default BoxListen
