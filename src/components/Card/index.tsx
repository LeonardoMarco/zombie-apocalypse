import React from 'react'
import { Personas } from '../../store/types'
import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons'
interface Props {
  dataPersonas: Personas[]
  actionDetail: (id: number) => void
}

const Card: React.FC<Props> = ({ dataPersonas, actionDetail }) => {
  return (
    <>
      {dataPersonas.map((persona, i) => (
        <div key={i}>
          <S.Container theme={persona.infected ? 'Infected' : 'Survivor'}>
            <S.Infos>
              <div>
                <img src={persona.avatar} alt='Image persona' />
              </div>
              <div>
                <h3>{persona.fullName}</h3>
                <h4>{persona.infected ? 'Infected' : 'Survivor'}</h4>
              </div>
            </S.Infos>
            <S.Detail onClick={() => actionDetail(persona.id)}>
              <FontAwesomeIcon size='2x' icon={faInfoCircle} />
            </S.Detail>
          </S.Container>
        </div>
      ))}
    </>
  )
}

export default Card
