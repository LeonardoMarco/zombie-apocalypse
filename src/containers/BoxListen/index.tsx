import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as S from './styles'

import Card from '../../components/Card'
import SearchGroup from '../../components/SearchGroup'

import { InitialState } from '../../store/types'
import {
  changeInputSearch,
  changeSelectSearch,
  closeModalDetail,
  fetchPersonas,
  openModalDetail,
  changePersona
} from '../../store/actions'
import ModalDetail from '../../components/ModalDetail'

const BoxListen: React.FC = () => {
  const state = useSelector((state: InitialState) => state)
  const dispatch = useDispatch()

  const changeInput = (value: string) => dispatch(changeInputSearch(value))
  const changeSelect = (value: string) => dispatch(changeSelectSearch(value))

  const selectDetailPersona = (id: number) => dispatch(openModalDetail(id))
  
  const closeModal = () => dispatch(closeModalDetail())
  const changePersonaHandle = (id: number) => dispatch(changePersona(id))

  useEffect(() => {
    dispatch(fetchPersonas())
  }, [])

  return (
    <S.Container>
      <SearchGroup onChangeInput={changeInput} onChangeSelect={changeSelect} />
      <Card dataPersonas={state.filtered} actionDetail={selectDetailPersona} />
      <ModalDetail
        open={state.openModal}
        persona={state.modalInfo}
        closeModal={closeModal}
        changePersona={changePersonaHandle}
      />
    </S.Container>
  )
}

export default BoxListen
