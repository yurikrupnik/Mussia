import app from './app';
import {SERVER} from './config';

app.listen(SERVER.PORT, () => console.log(`Listening on: ${SERVER.URL()}`));

export default app;

function Person(age, name) {
    this.age = age;
    this.name = name || 'default';
}