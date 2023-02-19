import nodeMailer from 'nodemailer';
import config from "config";
import {createReservationType} from "../schema/reservation.schema";

const user = config.get<string>('emailUser');
const pass = config.get<string>('pass');

export const transporter = nodeMailer.createTransport({
	port: 465,
	host: 'smtp.gmail.com',
	auth: {
		user,
		pass
	},
	secure: true
})

export const configureMailMessage = ({fullName, email, phone, subject, message}: createReservationType['body']) => {
	return {
		from: user,  // sender address
		to: user,   // list of receivers
		subject: 'Ново запитване за резервация',
		text: 'That was easy!',
		html: `<b>Туко що бе получено ново запитване за резервация със съответната информация:</b><br/>
		<br>Имена: ${fullName}<br/>
		<br>Емайл: ${email}<br/>
		<br>Телефон: ${phone}<br/>
		<br>Тема: ${subject}<br/>
		<br>Съобщение: ${message}<br/>
	`,
	};
}
