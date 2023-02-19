import {createReservationType} from "../schema/reservation.schema";
import prisma from "../db/prisma";

export const createReservation = (payload: createReservationType['body']) => {
	return prisma.request.create({
		data: {
			...payload
		}
	})
}