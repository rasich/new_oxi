export default {
	ui: {
		button: {
			login: 'Войти',
			logout: 'Выход',
		},
		input: {
			placeholder: {
				email: 'Введите почту',
				password: 'Введите пароль',
			},
			error: {
				required: 'Обязательно',
			},
			label: {
				email: 'Почта',
				password: 'Пароль',
			},
		},
		checkbox: {
			rememberMe: 'Запомнить меня',
		},
		select: {
			language: 'Язык',
			theme: {
				light: 'Светлый',
				dark: 'Темный',
				theme: 'тема',
			},
		},
		time: {
			now: 'Только что',
			second: {
				short: 'сек.',
				full: 'секунда',
				one: '{count} секунда',
				couple: '{count} секунды',
				many: '{count} секунд',
			},
			minute: {
				short: 'мин.',
				one: '{count} минута',
				couple: '{count} минуты',
				many: '{count} минут',
			},
			hour: {
				short: 'час.',
				one: '{count} час',
				couple: '{count} часа',
				many: '{count} часов',
			},
			day: {
				short: 'дн.',
				one: '{count} день',
				couple: '{count} дня',
				many: '{count} дней',
			},
			week: 'Неделя',
			month: 'Месяц',
			year: 'Год',
			ago: 'назад',
		},
		modal: {},
		counter: {
			devices: {
				one: '{count} устройство',
				couple: '{count} устройства',
				many: '{count} устройств',
			},
		},
		table: {
			number: 'Номер',
		},
		emptyOrError: {
			search: {
				empty: 'Ничего не найдено',
				error: ' Не удалось загрузить данные',
			},
			data: 'Нет данных',
			error: 'Что-то пошло не так',
		},
		toasts: {
			success: 'Успешно',
			error: 'Ошибка',
			somethingWentWrong: 'Что-то пошло не так',
			authError:
				'Произошла ошибка при входе. Пожалуйста, проверьте Ваш email и пароль и попробуйте снова. Если проблема сохраняется, пожалуйста свяжитесь с Вашим администратором',
		},
	},
	nav: {
		explore: 'Обзор',
		dashboard: 'Мониторинг',
		categories: 'Категории',
		reports: 'Отчеты',
		devices: 'Устройства',
		processes: 'Процессы',
		logs: 'Журнал событий',
		settings: 'Настройки',
		account: 'Аккаунт',
	},

	pages: {
		login: {
			titleMeta: 'Авторизация',
			title: 'Авторизация',
			description: 'Пожалуйста, введите Ваши данные, чтобы получить доступ к OXI.',
		},
	},
	error: {
		notFound: 'Не найдено',
		status: {
			unknown: 'Неизвестная ошибка',
		},
	},
} as const
