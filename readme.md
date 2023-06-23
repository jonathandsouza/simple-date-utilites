# Simple Date Utility

This library provides a comprehensive set of functions to manage dates effectively in your JavaScript/TypeScript applications. The main objective of this library is to make date handling tasks, like date formatting, date parsing, calculating differences between dates, and other date manipulations easier and more efficient.

## Features

1. **Date Validation:** The `isDate()` function can be used to check if a given variable is a date object.

2. **Date Formatting:** The `formatDate()` function allows you to format dates into a variety of formats.

3. **String to Date Conversion:** The `convertToDateObj()` function allows you to convert a date string into a date object based on the provided format.

4. **MySQL String to Date Conversion:** The `mysqlStrToDate()` function converts a MySQL formatted date string into a JavaScript date object.

5. **Date Difference Calculation:** The `calculateDateDifference()` function calculates the difference between two dates in days, hours, minutes, and seconds. The `differenceInMonths()` function calculates the difference in months between two dates and the `differenceInDays()` function calculates the difference in days.

6. **Date Cloning and Manipulation:** The `cloneDate()` function creates a clone of a provided date object with the ability to modify specific date parts like year, month, day, hour, and minute. The `addDays()` function creates a new date by adding a specified number of days to a provided date.

7. **Time Setting:** The `setTime()` function allows you to set the time of a date object based on a provided string.

8. **Date Comparison:** The `isPastDate()` function checks if a provided date is in the past. The `isInRange()` function checks if a date falls within a specified range.

## Installation

To install this library, you need to have Node.js and npm installed on your machine. Use the following command to install the library:

```
npm install <library-name>
```

(Note: Replace `<library-name>` with the actual name of this library.)

## Usage

Once the library is installed, you can import it into your JavaScript/TypeScript file like so:

```javascript
import * as dateUtil from '<library-name>';
```

And then use any of the functions from this library in your code. Here is an example of using the `formatDate()` function:

```javascript
let date = new Date();
let formattedDate = dateUtil.formatDate(date, "WD_DD_MMM_YYYY");
console.log(formattedDate); // Outputs the date in the format 'Mon 21 Jun 2023'
```

For detailed usage instructions of each function, please refer to the API documentation section of this README or the code comments in the library itself.

## Contribution

We welcome any contributions to improve this library. Please fork this repository, make your changes and submit a pull request.

## License

This library is licensed under the MIT License.
