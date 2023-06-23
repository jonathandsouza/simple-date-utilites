export type DATE_FORMAT =
	| "YYYY_MM_DD"
	| "DD_MM_YYYY"
	| "WD_DD_MMM_YYYY_HH_MM"
	| "D_MMMM_YYYY"
	| "WD_DD_MMMM_YYYY"
	| "WD_DD_MMM_YYYY"
	| "WD_DD_MMM"
	| "WD_DD_MMM_HH_MM"
	| "YYYY_MM"
	| "MMMM_YYYY"
	| "WDWDWD_DD_MMMM_YYYY"
	| "WDWDWD_D_MMMM"
	| "D_MMM"
	| "WD_D_MMM_YY"
	| "D_M_YYYY"
	| "YYYY_MM_DD_HH_MM";

const dayNames = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const calendarDayNames = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const dayNamesLowercase = [
	"Sunday",
	"Monday",
	"Tuesday",
	"Wednesday",
	"Thursday",
	"Friday",
	"Saturday",
];

const monthNames = [
	"Januari",
	"Februari",
	"Maart",
	"April",
	"Mei",
	"Juni",
	"Juli",
	"Augustus",
	"September",
	"Oktober",
	"November",
	"December",
];

const monthNamesLowercase = [
	"januari",
	"februari",
	"maart",
	"april",
	"mei",
	"juni",
	"juli",
	"augustus",
	"september",
	"oktober",
	"november",
	"december",
];

const monthNamesShortForms = [
	"Jan.",
	"Feb.",
	"Mrt.",
	"Apr.",
	"Mei",
	"Jun.",
	"Jul.",
	"Aug.",
	"Sep.",
	"Okt.",
	"Nov.",
	"Dec.",
];

export function isDate(dateToCheck: any) {
	return Object.prototype.toString.call(dateToCheck) === "[object Date]";
}

export function formatDate(
	date: Date,
	format: DATE_FORMAT = "DD_MM_YYYY",
	{ isMonthLowercase = false, isDayLowercase = false } = {}
) {
	if (!date) {
		return null;
	}

	const yyyy = date.getFullYear(); // year (full)
	const yy = yyyy.toString().slice(-2); // year 2 digits
	const d = date.getDate(); // date 1 digit
	const dd = ("0" + d).slice(-2); // date 2 digits

	let m = date.getMonth();
	let mmmm = monthNames[m]; // full month name
	let mmm = monthNamesShortForms[m]; // short month name (3 letters)
	let mmmWithDot = mmm;

	if (isMonthLowercase) {
		mmmm = mmmm.toLowerCase();
		mmm = mmm.toLowerCase();
		mmmWithDot = mmmWithDot.toLowerCase();
	}
	m = m + 1; // month 1 digit
	const mm = ("0" + m).slice(-2); // month 2 digits
	let wdwd = dayNames[date.getDay()]; // day name

	let wd = wdwd.slice(0, 2); // short day name (2 letters)
	if (isDayLowercase) {
		wdwd = wdwd.toLowerCase();
		wd = wd.toLowerCase();
	}
	const hours = ("0" + date.getHours()).slice(-2); // hours
	const minutes = ("0" + date.getMinutes()).slice(-2); // minutes

	switch (format) {
		case "YYYY_MM_DD":
			return `${yyyy}-${mm}-${dd}`;

		case "DD_MM_YYYY":
			return `${dd}-${mm}-${yyyy}`;

		case "WD_DD_MMM_YYYY_HH_MM":
			return `${wd} ${dd} ${mmmWithDot} ${yyyy}; ${hours}:${minutes}`;

		case "WD_DD_MMM_HH_MM":
			return `${wd} ${dd} ${mmm}; ${hours}:${minutes}`;

		case "D_MMMM_YYYY":
			return `${d} ${mmmm} ${yyyy}`;

		case "WD_DD_MMMM_YYYY":
			return `${wd} ${dd} ${mmmm} ${yyyy}`;

		case "WD_DD_MMM_YYYY":
			return `${wd} ${dd} ${mmmWithDot} ${yyyy}`;

		case "WD_DD_MMM":
			return `${wd} ${dd} ${mmmWithDot}`;

		case "YYYY_MM":
			return `${yyyy}-${mm}`;

		case "MMMM_YYYY":
			return `${mmmm} ${yyyy}`;

		case "WDWDWD_DD_MMMM_YYYY":
			return `${wdwd} ${dd} ${mmmm} ${yyyy}`;

		case "WDWDWD_D_MMMM":
			return `${wdwd} ${d} ${mmmm}`;

		case "D_MMM":
			return `${d} ${mmmWithDot}`;

		case "WD_D_MMM_YY":
			return `${wd} ${d} ${mmm} '${yy}`;

		case "D_M_YYYY":
			return `${d}-${m}-${yyyy}`;

		default:
			return null;
	}
}

export function convertToDateObj(
	dateStr: string,
	format: DATE_FORMAT = "DD_MM_YYYY"
) {
	if (!dateStr) {
		return null;
	}

	if (format === "YYYY_MM_DD_HH_MM") {
		const tempSplit = dateStr.split("-");
		const temp = tempSplit[2].split(" ");
		const timeSplit = temp[1].split(":");

		return new Date(
			parseInt(tempSplit[0]),
			parseInt(tempSplit[1]) - 1,
			parseInt(temp[0]),
			parseInt(timeSplit[0]),
			parseInt(timeSplit[1]),
			parseInt(timeSplit[2])
		);
	}

	const tempSplit = dateStr.split(format === "D_MMMM_YYYY" ? " " : "-");

	if (format === "D_MMMM_YYYY") {
		tempSplit[1] = (
			monthNamesLowercase.indexOf(tempSplit[1].toLowerCase()) + 1
		).toString();
	} else if (format === "YYYY_MM_DD") {
		tempSplit.reverse();
	}

	return new Date(
		parseInt(tempSplit[2]),
		parseInt(tempSplit[1]) - 1,
		parseInt(tempSplit[0])
	);
}

export function mysqlStrToDate(d: string) {
	if (d && d.length > 0) {
		const t = d.split(/[- :]/);
		const split = t[2].split(/[T]/);
		return new Date(
			parseInt(t[0]),
			parseInt(t[1]) - 1,
			t[2] ? parseInt(split[0]) : 1,
			t[3] ? parseInt(split[1]) : 0,
			t[4] ? parseInt(t[4]) : 0,
			t[5] ? parseInt(t[5]) : 0
		);
	}
	return null;
}

export function calculateDateDifference(fromDate: Date, toDate: Date) {
	fromDate = fromDate ?? new Date();

	const result: any = {};

	let difference = Math.ceil((fromDate.getTime() - toDate.getTime()) / 1000);

	result.difference = difference;

	result.days = Math.floor(difference / 86400); // 86400 = 24 hours * 60 minutes * 60 seconds

	difference = difference - result.days * 86400; // 86400 = 24 hours * 60 minutes * 60 seconds
	result.hours = Math.floor(difference / 3600); // 3600 = 60 minutes * 60 seconds

	difference = difference - result.hours * 3600; // 3600 = 60 minutes * 60 seconds
	result.minutes = Math.floor(difference / 60); // 60 = 60 seconds

	result.seconds = difference - result.minutes * 60; // 60 = 60 seconds

	return result;
}

export function differenceInMonths(startMonth: Date, endMonth: Date) {
	return (
		12 * endMonth.getFullYear() +
		endMonth.getMonth() -
		(12 * startMonth.getFullYear() + startMonth.getMonth())
	);
}

export function differenceInDays(
	d1: Date,
	d2: Date,
	options = { isAbsolute: true, isCeil: true }
) {
	const time1 = d1.getTime();
	const time2 = d2.getTime();

	const diffDays = Math[options.isCeil ? "ceil" : "floor"](
		Math.abs((time2 - time1) / 86400000) // 86400000 = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
	);

	return options.isAbsolute || time2 > time1 ? diffDays : -diffDays;
}

export function cloneDate(
	d: Date,
	obj?: {
		year?: number;
		month?: number;
		day?: number;
		hour?: number;
		minute?: number;
	}
) {
	const { year, month, day, hour, minute } = obj ?? {};

	return new Date(
		year ?? d.getFullYear(),
		month ?? d.getMonth(),
		day ?? d.getDate(),
		hour ?? d.getHours(),
		minute ?? d.getMinutes()
	);
}

export function addDays(d: Date, days: number) {
	return cloneDate(d, { day: d.getDate() + days });
}

export function setTime(date: Date, timeStr: string) {
	if (!isDate(date) || !timeStr) {
		return null;
	}

	const tempSplit = timeStr.split(":");

	return cloneDate(date, {
		hour: parseInt(tempSplit[0]),
		minute: parseInt(tempSplit[1]),
	});
}

export function isPastDate(d: Date) {
	if (new Date().setHours(0, 0, 0, 0) <= d?.setHours(0, 0, 0, 0)) {
		return false;
	}
	return true;
}

export function isInRange(from: Date, to: Date, check: Date) {
	return check >= from && check <= to;
}
