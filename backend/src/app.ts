import express from 'express';
import config from 'config';
import connect from './utils/connect';
import routes from './routes';
import deseriazeUser from './middleware/deserializeUser';

const port = config.get<number>('port')

const app = express();

app.use(express.json());

app.use(deseriazeUser);

app.listen(port, async () => {

  console.log(`app is running at http://localhost:${port}`)

  await connect();

  routes(app);

});
