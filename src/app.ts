import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'

import apiV1Routes from '@routes/api/v1'

const {
  MONGO_PORT,
  MONGO_PASSWORD,
  MONGO_PATH,
  MONGO_USER,
} = process.env

const { PORT } = process.env
const app = express()

mongoose.set('debug', true)
mongoose.connect(
  `mongodb://${MONGO_USER}:${MONGO_PASSWORD}@localhost:${MONGO_PORT}/${MONGO_PATH}?authSource=admin`,
)

app.use(express.json())
app.use('/api/v1', apiV1Routes)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server listening on port ${PORT}`)
})
