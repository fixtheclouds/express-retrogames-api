import { Request, Response } from 'express'
import Genre from '@models/Genre'

class GenresController {
  public async getGenres(req: Request, res: Response): Promise<Response> {
    const genres = await Genre.find()
    return res.status(200).json(genres)
  }

  public async createGenre(req: Request, res: Response): Promise<Response> {
    if (!req.body) return res.sendStatus(400)

    const newGenre = new Genre({ name: req.body.name })
    try {
      const genre = await newGenre.save()
      return res.status(200).json(genre)
    } catch (ex) {
      console.error(ex)
      return res.status(500).json({ message: ex.message })
    }
  }

  public async deleteGenre(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    try {
      const genre = await Genre.findById(id)
      await genre.remove()
      return res.status(200).json(true)
    } catch (ex) {
      console.error(ex)
      return res.status(500).json({ message: ex.message })
    }
  }
}

export default new GenresController()
