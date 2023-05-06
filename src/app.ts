import express, {Express} from 'express';
import cors from 'cors';

import logger from './utils/logger';
import routes from "./routes";

const app: Express = express();

const port = process.env.PORT;
const origin = process.env.NODE_ENV === 'production' ? process.env.ORIGIN_PROD : process.env.ORIGIN_DEV;
console.log(origin)

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
