import { notification } from 'antd';

export { error, success };

function error(args) {
	let options = {};

	if (typeof(args) === 'string') {
		options.message = 'Error';
		options.description = args;
	} else if (args instanceof Error) {
		options.message = 'Error';
		options.description = args.message;
		console.error(args);
	} else {
		options = args;
	}

	notification.error(options);
	console.error('Notification Helper > error > ERROR:', args);
}

function success(args) {
	let options = {};

	if (typeof(args) === 'string') {
		options.message = 'Success';
		options.description = args;
	} else {
		options = args;
	}

	notification.success(options);
	console.log('Notification Helper > success > ERROR:', args);
}