import Redux from 'redux'

import { CHANGE_INPUT_SEARCH, CHANGE_SELECT_SEARCH, FETCH_PERSONAS, OPEN_MODAL_DETAIL, CLOSE_MODAL_DETAIL, CHANGE_PERSONA } from "./types";


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

export const openModalDetail = (id: number) => ({
  type: OPEN_MODAL_DETAIL,
  id: id
})

export const closeModalDetail = () => ({
  type: CLOSE_MODAL_DETAIL,
})

export const changePersona = (id: number) => ({
  type: CHANGE_PERSONA,
  id: id
})
