import { DATE_FORMAT } from "./types";
export declare function isDate(dateToCheck: any): boolean;
export declare function formatDate(date: Date, format?: DATE_FORMAT, { isMonthLowercase, isDayLowercase }?: {
    isMonthLowercase?: boolean | undefined;
    isDayLowercase?: boolean | undefined;
}): string | null;
export declare function convertToDateObj(dateStr: string, format?: DATE_FORMAT): Date | null;
export declare function mysqlStrToDate(d: string): Date | null;
export declare function calculateDateDifference(fromDate: Date, toDate: Date): any;
export declare function differenceInMonths(startMonth: Date, endMonth: Date): number;
export declare function differenceInDays(d1: Date, d2: Date, options?: {
    isAbsolute: boolean;
    isCeil: boolean;
}): number;
export declare function cloneDate(d: Date, obj?: {
    year?: number;
    month?: number;
    day?: number;
    hour?: number;
    minute?: number;
}): Date;
export declare function addDays(d: Date, days: number): Date;
export declare function setTime(date: Date, timeStr: string): Date | null;
export declare function isPastDate(d: Date): boolean;
export declare function isInRange(from: Date, to: Date, check: Date): boolean;
