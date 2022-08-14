import 'dotenv/config'
import express from 'express'

import app from './app'
import apiV1Routes from '@routes/api/v1'

const { PORT } = process.env

app.use(express.json())
app.use('/api/v1', apiV1Routes)

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server listening on port ${PORT}`)
})
