import {Request, Response} from "express";
import {createReservationType} from "../schema/reservation.schema";
import {createReservation} from "../service/reservation.service";
import {configureMailMessage, transporter} from "../utils/mailer";

export const createReservationHandler = async (
	req: Request<{}, {}, createReservationType['body']>,
	res: Response
) => {
	const payload = req.body;

	const request = await createReservation(payload);

	try {
		await transporter.sendMail(configureMailMessage(payload));

		res.status(201).send(request);
	} catch (e) {
		if (e instanceof Error) {
			res.status(401).send(e.message);
		}
	}
}