import type { NextPage } from 'next'
import { useSelector, useDispatch } from "react-redux";
import { InitialState } from '../store/types';
// import { RootState } from '../store/reducer';


const Home: NextPage = () => {
  let survivors = useSelector((state: InitialState) => state.survivors);

  return (
    <div>
      {survivors.map((s, i) => (
        <div key={i}>
          {s.fullName}
        </div>
      ))}
    </div>
  )
}

export default Home
