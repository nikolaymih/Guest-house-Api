import nodeMailer from 'nodemailer';
import {createReservationType} from "../schema/reservation.schema";

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;

console.log(user, pass);

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
		to: email,   // list of receivers
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
