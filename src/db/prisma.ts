import {PrismaClient} from '@prisma/client';
import config from "config";

const client = new PrismaClient({
	datasources: {
		db: {
			url: config.get<string>('DATABASE_URL'),
		},
	},
});

export default client;