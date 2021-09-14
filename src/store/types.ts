export const DEFAULT = "DEFAULT"
export const CHANGE_INPUT_SEARCH = 'CHANGE_INPUT_SEARCH'
export const CHANGE_SELECT_SEARCH = 'CHANGE_SELECT_SEARCH'
export const FETCH_PERSONAS = 'FETCH_PERSONAS'


export interface Personas {
  id: number
  fullName: string
  avatar: string
  age: number
  description: string
  infected: boolean
}


export interface InitialState {
  survivors: Personas[]
  filtered: Personas[]
  searchText: string
  searchType: string
}
