type PreProps = {
	sec?: never
	min?: never
	hour?: never
	day?: never
}

type SecProps = Omit<PreProps, 'sec'> & {
	sec: number
}

type MinProps = Omit<PreProps, 'min'> & {
	min: number
}

type HourProps = Omit<PreProps, 'hour'> & {
	hour: number
}

type DayProps = Omit<PreProps, 'day'> & {
	day: number
}

type Props = SecProps | MinProps | HourProps | DayProps

export const getMillisecondsPeriod = ({ sec, min, hour, day }: Props) => {
	if (sec) return 1000 * sec
	if (min) return 1000 * 60 * min
	if (hour) return 1000 * 60 * 60 * hour
	if (day) return 1000 * 60 * 60 * 24 * day
}
