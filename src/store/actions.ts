import Redux from 'redux'

import { CHANGE_INPUT_SEARCH, CHANGE_SELECT_SEARCH, FETCH_PERSONAS } from "./types";


export const fetchPersonas = () => async (dispatch: Redux.Dispatch) => {
  fetch('/api/listPersonas')
  .then(resp => resp.json())
  .then(resp => {
    dispatch({
      type: FETCH_PERSONAS,
      data: resp
    })
  })
}

export const changeInputSearch = (value: string) => ({
  type: CHANGE_INPUT_SEARCH,
  value: value
})

export const changeSelectSearch = (value: string) => ({
  type: CHANGE_SELECT_SEARCH,
  value: value
})
