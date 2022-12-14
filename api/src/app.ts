import express from 'express';
import config from 'config';
import connect from './utils/connect';
import routes from './routes';
import deseriazeUser from './middleware/deserializeUser';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';

import swaggerFile from '../swagger.json';

const port = config.get<number>('port')

const app = express();

app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerFile));

app.use(express.json());

app.use(cors({ credentials: true, origin: '*' }));

app.use(deseriazeUser);

app.listen(port, async () => {

  console.log(`app is running at http://localhost:${port}`)

  await connect();

  routes(app);

});
