import { HYDRATE } from "next-redux-wrapper";
import { AnyAction } from "redux";
import { InitialState } from "./types";

const initialState: InitialState = {
  survivors: [
    {
      id: 0,
      fullName: 'Leonardo Marco',
      avatar: '/images/persona-one.svg',
      age: 24,
      description: 'Saint Louis',
      infected: false,
    },
    {
      id: 0,
      fullName: 'Jhon Jones',
      avatar: '/images/persona-one.svg',
      age: 24,
      description: 'Saint Louis',
      infected: true,
    },
  ],
  filtered: [
    {
      id: 0,
      fullName: 'Junior Santos',
      avatar: '/images/persona-one.svg',
      age: 24,
      description: 'Saint Louis',
      infected: false,
    },
  ]
};



const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state};
    default:
      return state;
  }
};

export default reducer;