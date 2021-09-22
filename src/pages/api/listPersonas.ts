import type { NextApiRequest, NextApiResponse } from 'next'
import { Personas } from '../../store/types'

const PERSONAS = [
  {
    "id": 1,
    "fullName": "Leonardo",
    "avatar": "/images/persona-one.svg",
    "age": 24,
    "description": "born and raised in Santa Luzia",
    "infected": false
  },
  {
    "id": 2,
    "fullName": "Nobis",
    "avatar": "/images/persona-two.svg",
    "age": 32,
    "description": "nobis is a beast",
    "infected": false
  },
  {
    "id": 3,
    "fullName": "Moloezi",
    "avatar": "/images/persona-three.svg",
    "age": 40,
    "description": "Moloezi was not so lucky in life",
    "infected": true
  },
  {
    "id": 4,
    "fullName": "Zeuss",
    "avatar": "/images/persona-four.svg",
    "age": 29,
    "description": "Zeuss is the best warrior of the lost city",
    "infected": false
  },
  {
    "id": 5,
    "fullName": "Beuno",
    "avatar": "/images/persona-five.svg",
    "age": 75,
    "description": "Beuno is the sage of the lost land",
    "infected": false
  }
]

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Personas[]>
) {
  res.status(200).json(PERSONAS)
}
