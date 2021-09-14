import { HYDRATE } from "next-redux-wrapper"
import { AnyAction } from "redux"
import { CHANGE_INPUT_SEARCH, FETCH_PERSONAS, CHANGE_SELECT_SEARCH, InitialState } from "./types"

const initialState: InitialState = {
  survivors: [],
  filtered: [],
  searchText: "",
  searchType: "all",
}

function filterPersonas(state: InitialState) {
  let newState = state
  
  if (state.searchText.length == 0)
    newState = {
      ...newState,
      filtered: state.survivors
    }
  else
    newState = {
      ...newState,
      filtered: state.survivors.filter(persona => persona.fullName.includes(state.searchText))
    }
  
  if (state.searchType === 'infecteds')
    newState = {
      ...newState,
      filtered: newState.filtered.filter(survivor => survivor.infected)
    }
  else
    newState = {
      ...newState,
      filtered: newState.filtered
    } 

  return newState

}

const reducer = (state = initialState, action: AnyAction) => {
  switch (action.type) {
    case HYDRATE:
      return { ...state};
    case FETCH_PERSONAS:
      return {
        ...state,
        survivors: action.data,
        filtered: action.data
      }
    case CHANGE_INPUT_SEARCH:
      return filterPersonas({
        ...state,
        searchText: action.value
      })

    case CHANGE_SELECT_SEARCH:
      return filterPersonas({
        ...state,
        searchType: action.value
      })
    default:
      return state;
  }
}

export default reducer
