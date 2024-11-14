import {DateTime} from 'luxon';

export function format_time(nanoseconds) {
	const milliseconds = Number(nanoseconds) / 1000000;
	const date = DateTime.fromMillis(milliseconds);

	if (date.toFormat('yyyy-MM-dd') === DateTime.now().toFormat('yyyy-MM-dd')) {
		// If the date is today, format it to show 'Today at 10:00 AM'
		return `Today at ${date.toFormat('h:mm a')}`;
	} else {
		// If the date is not today, show the full date in a medium format
		return date.toLocaleString(DateTime.DATETIME_MED);
	}
}
