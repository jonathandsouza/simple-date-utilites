export type DATE_FORMAT = "YYYY_MM_DD" | "DD_MM_YYYY" | "WD_DD_MMM_YYYY_HH_MM" | "D_MMMM_YYYY" | "WD_DD_MMMM_YYYY" | "WD_DD_MMM_YYYY" | "WD_DD_MMM" | "WD_DD_MMM_HH_MM" | "YYYY_MM" | "MMMM_YYYY" | "WDWDWD_DD_MMMM_YYYY" | "WDWDWD_D_MMMM" | "D_MMM" | "WD_D_MMM_YY" | "D_M_YYYY" | "YYYY_MM_DD_HH_MM";
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
