import 'dotenv/config';
import express from 'express';

import app from './app';
import apiRoutes from './routes/api';

const { PORT } = process.env;

app.use(express.json());
app.use('/api', apiRoutes);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.info(`Server listening on port ${PORT}`);
});
