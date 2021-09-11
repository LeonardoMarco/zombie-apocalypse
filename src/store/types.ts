export const DEFAULT = "DEFAULT";


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
}