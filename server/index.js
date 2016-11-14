/* eslint-disable no-console */
import app from './app';
import config from './config/env';

app.listen(config.port, () => console.log(`Listening on: ${config.ip}:${config.port}`));
export default app;

/* eslint-enable no-console */
