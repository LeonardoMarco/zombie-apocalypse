/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import BoxListen from '../containers/BoxListen'
import * as S from '../styles/Home'

const Home: NextPage = () => {
  return (
    <S.Container>
      <img src='/images/logo.svg' alt='logo zombie game' />
      <BoxListen />
    </S.Container>
  )
}

export default Home
