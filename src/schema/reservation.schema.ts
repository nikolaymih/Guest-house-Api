import * as yup from 'yup';
import {minRequiredMessageVal, requiredMessageValidation, validationErrorMessage} from "../utils/helpers";

const fullNameRegex = /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const phoneNumberRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;

export const createReservationSchema = yup.object({
	body: yup.object({
		fullName: yup.string().required(requiredMessageValidation('Full name')).matches(fullNameRegex, validationErrorMessage('fullName')),
		email: yup.string().required(requiredMessageValidation('Email')).matches(emailRegex, validationErrorMessage('email')),
		phone: yup.string().required(requiredMessageValidation('Phone')).matches(phoneNumberRegex, validationErrorMessage('phone')),
		subject: yup.string().required(requiredMessageValidation('Subject')).min(3, minRequiredMessageVal('Title', 3)),
		message: yup.string().required(requiredMessageValidation('Message')).min(10, minRequiredMessageVal('Message', 10))
	})
});

export type createReservationType = yup.InferType<typeof createReservationSchema>;

