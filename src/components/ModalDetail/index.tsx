import React from 'react'

import { Personas } from '../../store/types'

import * as S from './styles'

interface Props {
  open: boolean
  persona: Personas
  closeModal: () => void
  changePersona: (id: number) => void
}

const ModalDetail: React.FC<Props> = ({
  open,
  persona,
  closeModal,
  changePersona,
}) => {
  if (!open) return <div />

  const infected = persona.infected ? 'Infected' : 'Survivor'

  return (
    <S.Container>
      <S.ModalClose onClick={closeModal} data-testid="close">X</S.ModalClose>
      <S.Modal>
        <S.Row>
          <div>
            <img src={persona.avatar} alt='' />
          </div>
        </S.Row>
        <S.Row>{persona.fullName}</S.Row>
        <S.Row>{persona.age} anos</S.Row>
        <S.Row>{persona.description}</S.Row>
        <S.ChangePersona
          theme={infected}
          onClick={() => changePersona(persona.id)}
        >
          {infected === 'Infected' ? 'Save' : 'Infect'}
        </S.ChangePersona>
      </S.Modal>
    </S.Container>
  )
}

export default ModalDetail
