import app from './app';
import {port, host} from './config/env';

app.listen(port, () => console.log(`Listening on: ${host}`));
export default app;

/* eslint-enable no-console */
