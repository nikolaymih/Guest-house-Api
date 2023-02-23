import express, {Express} from 'express';
import config from 'config';
import cors from 'cors';

import logger from './utils/logger';
import routes from "./routes";

const app: Express = express();

const port = config.get<string>('port');
const origin = config.get<string>('origin');
console.log(process.env.PORT);

app.use(cors({
	origin,
	credentials: true
}))
app.use(express.json());
app.use(express.static('views'));

app.listen(port, () => {
	logger.info(`The server has started listening on port ${port}`);

	routes(app)
})
