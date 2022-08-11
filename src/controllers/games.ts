import { Request, Response } from 'express'
import { omitBy, isEmpty } from 'lodash'

import Game from '../models/Game'

/* Helpers */
async function addGenresToGame(gameId: string, genreIds: Array<string>) {
  for( const id of genreIds ){
    await Game.updateOne({ "_id": gameId }, { $push: { genres: id }}, { new: true, useFindAndModify: false })
  }
}

/* Actions */
const getGames = async (req: Request, res: Response): Promise<Response> => {
  const games = await Game.find().populate('platform').populate('genres')
  return res.status(200).json(games)
}

const getGame = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    const game = await Game.findById(id).populate('platform').populate('genres')
    if (!game) {
      return res.status(404).json({ message: `No game with id ${id}` })
    }
    return res.status(200).json(game)
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message })
  }
}

const createGame = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400)

  const { title, year, platform, genres } = req.body
  const newGame = new Game({
    title,
    year,
    platform
  })
  try {
    const game = await newGame.save()
    if (!isEmpty(genres)) {
      await addGenresToGame(newGame._id, genres)
    }
    return res.status(200).json(game)
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message })
  }
}

const updateGame = async (req: Request, res: Response): Promise<Response> => {
  if (!req.body) return res.sendStatus(400)

  const { id } = req.params
  const { title, platform, year, genres } = req.body
  const game = await Game.findById(id)
  Object.assign(game, omitBy({ title, year, platform }, isEmpty))
  try {
    const savedGame = await game.save()
    if (!isEmpty(genres)) {
      await addGenresToGame(savedGame._id, genres)
    }
    return res.status(200).json(savedGame)
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message })
  }
}

const deleteGame = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params
  try {
    const game = await Game.findById(id)
    await game.remove()
    return res.status(200).json(true)
  } catch (ex) {
    console.error(ex)
    return res.status(500).json({ message: ex.message })
  }
}

export {
  getGame,
  getGames,
  createGame,
  updateGame,
  deleteGame,
}
