import { 
          addDays, 
          calculateDateDifference, 
          cloneDate,
          convertToDateObj, 
          differenceInMonths, 
          formatDate, 
          isDate, 
          isPastDate, setTime } from "./index";

describe("Date Utility Functions", () => {

  // Test for formatDate
  it("Should correctly format date", () => {
    const date = new Date(2023, 5, 23);
    const formattedDate = formatDate(date, "DD_MM_YYYY");
    expect(formattedDate).toEqual("23-06-2023");
  });

  // Test for isDate
  it("Should correctly identify date objects", () => {
    expect(isDate(new Date())).toBe(true);
    expect(isDate("not a date")).toBe(false);
  });

  // Test for convertToDateObj
  it("Should correctly convert string to date object", () => {
    const dateStr = "23-06-2023";
    const dateObj = convertToDateObj(dateStr, "DD_MM_YYYY");
    expect(dateObj?.getDate()).toEqual(23);
    expect(dateObj?.getMonth()).toEqual(5);
    expect(dateObj?.getFullYear()).toEqual(2023);
  });

  // Test for calculateDateDifference
  it("Should correctly calculate date difference", () => {
    const date1 = new Date(2023, 5, 23);
    const date2 = new Date(2023, 5, 26);
    const diff = calculateDateDifference(date1, date2);
    expect(diff.days).toEqual(-3);
  });

  // Test for differenceInMonths
  it("Should correctly calculate difference in months", () => {
    const date1 = new Date(2023, 0, 1);
    const date2 = new Date(2023, 11, 31);
    const diffMonths = differenceInMonths(date1, date2);
    expect(diffMonths).toEqual(11);
  });

  // Test for cloneDate
  it("Should correctly clone date", () => {
    const date = new Date(2023, 5, 23);
    const clonedDate = cloneDate(date);
    expect(clonedDate.getTime()).toEqual(date.getTime());
  });

  // Test for addDays
  it("Should correctly add days to date", () => {
    const date = new Date(2023, 5, 23);
    const newDate = addDays(date, 5);
    expect(newDate.getDate()).toEqual(28);
  });

  // Test for setTime
  it("Should correctly set time for date", () => {
    const date = new Date(2023, 5, 23);
    const newDate = setTime(date, "12:30");
    expect(newDate?.getHours()).toEqual(12);
    expect(newDate?.getMinutes()).toEqual(30);
  });

  // Test for isPastDate
  it("Should correctly determine if date is in the past", () => {
    const pastDate = new Date(2020, 5, 23);
    expect(isPastDate(pastDate)).toBe(true);
    const futureDate = new Date(2025, 5, 23);
    expect(isPastDate(futureDate)).toBe(false);
  });

});
