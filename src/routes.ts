import {Express, Request, Response} from "express";
import prisma from "./db/prisma";
import {createReservationHandler} from "./controller/reservation.controller";
import {validateResource} from "./middleware/validateResource";
import {createReservationSchema} from "./schema/reservation.schema";

export default (app: Express) => {
	app.get('/', async (req: Request, res: Response) => {
		await prisma.user.create({
			data: {
				email: 'patkan',
				name: 'petrov1235',
				password: 'petrov',
			}
		})

		const users = await prisma.user.findMany();

		const names = users.map(user => user.name);

		res.send(`This db consists of ${names.length} records with names: ${names.join(', ')}`);
	})

	app.post('/request', validateResource(createReservationSchema), createReservationHandler)
}
