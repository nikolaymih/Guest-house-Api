import pino from 'pino';

const log = pino({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true
		},
	},
	base: {
		pid: false
	},
})

export default log;