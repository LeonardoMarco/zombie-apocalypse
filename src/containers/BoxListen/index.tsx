import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../../components/Card'
import * as S from './styles'
import { InitialState } from '../../store/types'

const BoxListen: React.FC = () => {
  const state = useSelector((state: InitialState) => state)

  function selectDetailPersona(id: number) {
    console.log(id)
  }

  return (
    <S.Container>
      <Card dataPersonas={state.survivors} actionDetail={selectDetailPersona} />
    </S.Container>
  )
}

export default BoxListen
