"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.configureMailMessage = exports.transporter = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const config_1 = __importDefault(require("config"));
const user = config_1.default.get('emailUser');
const pass = config_1.default.get('pass');
exports.transporter = nodemailer_1.default.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
        user,
        pass
    },
    secure: true
});
const configureMailMessage = ({ fullName, email, phone, subject, message }) => {
    return {
        from: user,
        to: user,
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
};
exports.configureMailMessage = configureMailMessage;
