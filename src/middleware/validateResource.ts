import * as yup from 'yup';
import {NextFunction, Request, Response} from "express";

export const validateResource = (schema: yup.Schema) => async (req: Request, res: Response, next: NextFunction) => {
	try {
		await schema.validate({
			body: req.body,
			query: req.query,
			params: req.params
		})
		next();
	} catch (e) {
		if (e instanceof Error) {
			res.status(400).send({message: e.message, type: e.name});
		}
	}
}