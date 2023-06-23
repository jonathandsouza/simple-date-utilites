var dayNames = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
];
var monthNames = [
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
var monthNamesLowercase = [
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
var monthNamesShortForms = [
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
function isDate(dateToCheck) {
    return Object.prototype.toString.call(dateToCheck) === "[object Date]";
}
function formatDate(date, format, _a) {
    if (format === void 0) { format = "DD_MM_YYYY"; }
    var _b = _a === void 0 ? {} : _a, _c = _b.isMonthLowercase, isMonthLowercase = _c === void 0 ? false : _c, _d = _b.isDayLowercase, isDayLowercase = _d === void 0 ? false : _d;
    if (!date) {
        return null;
    }
    var yyyy = date.getFullYear(); // year (full)
    var yy = yyyy.toString().slice(-2); // year 2 digits
    var d = date.getDate(); // date 1 digit
    var dd = ("0" + d).slice(-2); // date 2 digits
    var m = date.getMonth();
    var mmmm = monthNames[m]; // full month name
    var mmm = monthNamesShortForms[m]; // short month name (3 letters)
    var mmmWithDot = mmm;
    if (isMonthLowercase) {
        mmmm = mmmm.toLowerCase();
        mmm = mmm.toLowerCase();
        mmmWithDot = mmmWithDot.toLowerCase();
    }
    m = m + 1; // month 1 digit
    var mm = ("0" + m).slice(-2); // month 2 digits
    var wdwd = dayNames[date.getDay()]; // day name
    var wd = wdwd.slice(0, 2); // short day name (2 letters)
    if (isDayLowercase) {
        wdwd = wdwd.toLowerCase();
        wd = wd.toLowerCase();
    }
    var hours = ("0" + date.getHours()).slice(-2); // hours
    var minutes = ("0" + date.getMinutes()).slice(-2); // minutes
    switch (format) {
        case "YYYY_MM_DD":
            return "".concat(yyyy, "-").concat(mm, "-").concat(dd);
        case "DD_MM_YYYY":
            return "".concat(dd, "-").concat(mm, "-").concat(yyyy);
        case "WD_DD_MMM_YYYY_HH_MM":
            return "".concat(wd, " ").concat(dd, " ").concat(mmmWithDot, " ").concat(yyyy, "; ").concat(hours, ":").concat(minutes);
        case "WD_DD_MMM_HH_MM":
            return "".concat(wd, " ").concat(dd, " ").concat(mmm, "; ").concat(hours, ":").concat(minutes);
        case "D_MMMM_YYYY":
            return "".concat(d, " ").concat(mmmm, " ").concat(yyyy);
        case "WD_DD_MMMM_YYYY":
            return "".concat(wd, " ").concat(dd, " ").concat(mmmm, " ").concat(yyyy);
        case "WD_DD_MMM_YYYY":
            return "".concat(wd, " ").concat(dd, " ").concat(mmmWithDot, " ").concat(yyyy);
        case "WD_DD_MMM":
            return "".concat(wd, " ").concat(dd, " ").concat(mmmWithDot);
        case "YYYY_MM":
            return "".concat(yyyy, "-").concat(mm);
        case "MMMM_YYYY":
            return "".concat(mmmm, " ").concat(yyyy);
        case "WDWDWD_DD_MMMM_YYYY":
            return "".concat(wdwd, " ").concat(dd, " ").concat(mmmm, " ").concat(yyyy);
        case "WDWDWD_D_MMMM":
            return "".concat(wdwd, " ").concat(d, " ").concat(mmmm);
        case "D_MMM":
            return "".concat(d, " ").concat(mmmWithDot);
        case "WD_D_MMM_YY":
            return "".concat(wd, " ").concat(d, " ").concat(mmm, " '").concat(yy);
        case "D_M_YYYY":
            return "".concat(d, "-").concat(m, "-").concat(yyyy);
        default:
            return null;
    }
}
function convertToDateObj(dateStr, format) {
    if (format === void 0) { format = "DD_MM_YYYY"; }
    if (!dateStr) {
        return null;
    }
    if (format === "YYYY_MM_DD_HH_MM") {
        var tempSplit_1 = dateStr.split("-");
        var temp = tempSplit_1[2].split(" ");
        var timeSplit = temp[1].split(":");
        return new Date(parseInt(tempSplit_1[0]), parseInt(tempSplit_1[1]) - 1, parseInt(temp[0]), parseInt(timeSplit[0]), parseInt(timeSplit[1]), parseInt(timeSplit[2]));
    }
    var tempSplit = dateStr.split(format === "D_MMMM_YYYY" ? " " : "-");
    if (format === "D_MMMM_YYYY") {
        tempSplit[1] = (monthNamesLowercase.indexOf(tempSplit[1].toLowerCase()) + 1).toString();
    }
    else if (format === "YYYY_MM_DD") {
        tempSplit.reverse();
    }
    return new Date(parseInt(tempSplit[2]), parseInt(tempSplit[1]) - 1, parseInt(tempSplit[0]));
}
function mysqlStrToDate(d) {
    if (d && d.length > 0) {
        var t = d.split(/[- :]/);
        var split = t[2].split(/[T]/);
        return new Date(parseInt(t[0]), parseInt(t[1]) - 1, t[2] ? parseInt(split[0]) : 1, t[3] ? parseInt(split[1]) : 0, t[4] ? parseInt(t[4]) : 0, t[5] ? parseInt(t[5]) : 0);
    }
    return null;
}
function calculateDateDifference(fromDate, toDate) {
    fromDate = fromDate !== null && fromDate !== void 0 ? fromDate : new Date();
    var result = {};
    var difference = Math.ceil((fromDate.getTime() - toDate.getTime()) / 1000);
    result.difference = difference;
    result.days = Math.floor(difference / 86400); // 86400 = 24 hours * 60 minutes * 60 seconds
    difference = difference - result.days * 86400; // 86400 = 24 hours * 60 minutes * 60 seconds
    result.hours = Math.floor(difference / 3600); // 3600 = 60 minutes * 60 seconds
    difference = difference - result.hours * 3600; // 3600 = 60 minutes * 60 seconds
    result.minutes = Math.floor(difference / 60); // 60 = 60 seconds
    result.seconds = difference - result.minutes * 60; // 60 = 60 seconds
    return result;
}
function differenceInMonths(startMonth, endMonth) {
    return (12 * endMonth.getFullYear() +
        endMonth.getMonth() -
        (12 * startMonth.getFullYear() + startMonth.getMonth()));
}
function differenceInDays(d1, d2, options) {
    if (options === void 0) { options = { isAbsolute: true, isCeil: true }; }
    var time1 = d1.getTime();
    var time2 = d2.getTime();
    var diffDays = Math[options.isCeil ? "ceil" : "floor"](Math.abs((time2 - time1) / 86400000) // 86400000 = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds
    );
    return options.isAbsolute || time2 > time1 ? diffDays : -diffDays;
}
function cloneDate(d, obj) {
    var _a = obj !== null && obj !== void 0 ? obj : {}, year = _a.year, month = _a.month, day = _a.day, hour = _a.hour, minute = _a.minute;
    return new Date(year !== null && year !== void 0 ? year : d.getFullYear(), month !== null && month !== void 0 ? month : d.getMonth(), day !== null && day !== void 0 ? day : d.getDate(), hour !== null && hour !== void 0 ? hour : d.getHours(), minute !== null && minute !== void 0 ? minute : d.getMinutes());
}
function addDays(d, days) {
    return cloneDate(d, { day: d.getDate() + days });
}
function setTime(date, timeStr) {
    if (!isDate(date) || !timeStr) {
        return null;
    }
    var tempSplit = timeStr.split(":");
    return cloneDate(date, {
        hour: parseInt(tempSplit[0]),
        minute: parseInt(tempSplit[1]),
    });
}
function isPastDate(d) {
    if (new Date().setHours(0, 0, 0, 0) <= (d === null || d === void 0 ? void 0 : d.setHours(0, 0, 0, 0))) {
        return false;
    }
    return true;
}
function isInRange(from, to, check) {
    return check >= from && check <= to;
}

export { addDays, calculateDateDifference, cloneDate, convertToDateObj, differenceInDays, differenceInMonths, formatDate, isDate, isInRange, isPastDate, mysqlStrToDate, setTime };
