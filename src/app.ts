import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import apiV1Routes from '@routes/api/v1'

const {
  MONGO_PORT,
  MONGO_PASSWORD,
  MONGO_PATH,
  MONGO_USER,
  PORT
} = process.env

function main(): void {
  const app = express()
  app.use(express.json())

  mongoose.set('debug', true)
  mongoose.connect(
    `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/${MONGO_PATH}?authSource=admin`,
    {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
    },
  )

  app.use('/api/v1', apiV1Routes)
  app.listen(PORT, () => {
    // eslint-disable-next-line no-console
    console.info(`Server listening on port ${PORT}`)
  })
}

export default main()
