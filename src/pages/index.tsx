/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next'
import { useSelector, useDispatch } from "react-redux";
import BoxListen from '../containers/BoxListen';
import { InitialState } from '../store/types';
import * as S from '../styles/Home'

const Home: NextPage = () => {
  let survivors = useSelector((state: InitialState) => state.survivors);

  return (
    <S.Container>
      <img src="/images/logo.svg" alt="logo zombie game" />
      <BoxListen />
    </S.Container>
  )
}

export default Home
