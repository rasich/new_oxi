export default {
	ui: {
		button: {
			login: 'Login',
			logout: 'Log out',
		},
		input: {
			placeholder: {
				email: 'Enter email',
				password: 'Enter password',
			},
			error: {
				required: 'Required',
			},
			label: {
				email: 'Email',
				password: 'Password',
			},
		},
		checkbox: {
			rememberMe: 'Remember me',
		},
		select: {
			language: 'Language',
			theme: {
				light: 'Light',
				dark: 'Dark',
				theme: 'theme',
			},
		},
		time: {
			now: 'Just now',
			second: {
				short: 'sec',
				full: 'second',
				one: '{count} second',
				couple: '{count} seconds',
				many: '{count} seconds',
			},
			minute: {
				short: 'min.',
				one: '{count} minute',
				couple: '{count} minutes',
				many: '{count} minutes',
			},
			hour: {
				short: 'h.',
				one: '{count} hour',
				couple: '{count} hours',
				many: '{count} hours',
			},
			day: {
				short: 'd.',
				one: '{count} day',
				couple: '{count} days',
				many: '{count} days',
			},
			week: 'Week',
			month: 'Month',
			year: 'Year',
			ago: 'ago',
		},
		modal: {},
		counter: {
			devices: {
				one: '{count} device',
				couple: '{count} devices',
				many: '{count} devices',
			},
		},
		table: {
			number: 'Number',
		},
		emptyOrError: {
			search: {
				empty: 'No results found',
				error: 'Failed to load data',
			},
			data: 'No data',
			error: 'Something went wrong',
		},
		toasts: {
			success: 'Success',
			error: 'Error',
			somethingWentWrong: 'Something went wrong',
			authError:
				'We’re unable to log you in. Please check your email and password and try again. If the issue persists, please contact system administrator',
		},
	},
	nav: {
		explore: 'Explore',
		dashboard: 'Dashboard',
		categories: 'Categories',
		reports: 'Reports',
		devices: 'Devices',
		processes: 'Processes',
		logs: 'Logs',
		settings: 'Settings',
		account: 'Account',
	},

	pages: {
		login: {
			titleMeta: 'Login',
			title: 'Login',
			description: 'Please enter your credentials below to access OXI..',
		},
	},
	error: {
		notFound: 'Not found',
		status: {
			unknown: 'Unknown error',
		},
	},
} as const
