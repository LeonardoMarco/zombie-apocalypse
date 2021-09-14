import type { NextApiRequest, NextApiResponse } from 'next'
import { Personas } from '../../store/types'

const PERSONAS = [
  {
    "id": 1,
    "fullName": "Leonardo Marco",
    "avatar": "/images/persona-one.svg",
    "age": 24,
    "description": "Saint Louis",
    "infected": false
  },
  {
    "id": 2,
    "fullName": "Leonardo Marco 2",
    "avatar": "/images/persona-one.svg",
    "age": 24,
    "description": "Saint Louis",
    "infected": false
  },
  {
    "id": 3,
    "fullName": "Leonardo Marco 3",
    "avatar": "/images/persona-one.svg",
    "age": 24,
    "description": "Saint Louis",
    "infected": true
  },
  {
    "id": 4,
    "fullName": "Leonardo Marco 4",
    "avatar": "/images/persona-one.svg",
    "age": 24,
    "description": "Saint Louis",
    "infected": false
  },
  {
    "id": 5,
    "fullName": "Leonardo Marco 5",
    "avatar": "/images/persona-one.svg",
    "age": 24,
    "description": "Saint Louis",
    "infected": false
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Personas[]>
) {
  res.status(200).json(PERSONAS)
}
