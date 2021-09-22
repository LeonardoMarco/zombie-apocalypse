import { HYDRATE } from "next-redux-wrapper"
import { AnyAction } from "redux"
import { CHANGE_INPUT_SEARCH, FETCH_PERSONAS, CHANGE_SELECT_SEARCH, InitialState, OPEN_MODAL_DETAIL, CLOSE_MODAL_DETAIL, CHANGE_PERSONA } from "./types"

const initialState: InitialState = {
  survivors: [],
  filtered: [],
  searchText: "",
  searchType: "all",
  openModal: false,
  modalInfo: {
    id: 0,
    fullName: "",
    avatar: "/images/persona-one.svg",
    age: 0,
    description: "",
    infected: false
  }
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
      return { ...state }
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
    case OPEN_MODAL_DETAIL:
      return {
        ...state,
        openModal: true,
        modalInfo: state.survivors.find(s => s.id === action.id)
      }
    case CLOSE_MODAL_DETAIL:
      return {
        ...state,
        openModal: false,
      }
    case CHANGE_PERSONA:
      const position = state.survivors.findIndex(s => s.id === action.id)
      const newSurvivors = state.survivors

      newSurvivors[position].infected = !newSurvivors[position].infected

      return {
        ...state,
        survivors: newSurvivors,
        modalInfo: newSurvivors.find(s => s.id === action.id),
      }
    default:
      return state
  }
}

export default reducer
