// capture start time
const startTime = process.hrtime();
import { Constants } from '../shared/utils';

let dayCount = 1; // Jan 1 1900 was a Monday per instructions
let numSundays = 0;
for (let year = 1900; year <= 2018; year += 1) {
  for (let month = 1; month <= 12; month += 1) {

    // add days depending on what month it is
    switch (month) {
      case 1:
        // don't add days for Jan 1900 because that is where we are starting
        if (year > 1900) {
          // add 31 for December
          dayCount += 31;
        }
        break;

      case 3:
        // add Feb days
        dayCount += 28; // default for February

        // add an extra day for leap year if year is divisible by 4
        if (year % 4 === 0) {
          // but not on a century unless it is divisible by 400
          if (year % 100 !== 0 || year % 400 === 0) {
            dayCount += 1;
          }
        }
        break;

      case 5:
      case 7:
      case 10:
      case 12:
        // months with only 30 days
        dayCount += 30;
        break;
      default:
        // months with 31 days
        dayCount += 31;
        break;
    }
    console.log(`${year}-${month} dayOfWeek ${dayCount % 7}`);
    if (year >= 1901 && year <= 2000) {
      // this is the time period we want to count sundays for
      if (dayCount % 7 === 0) {
        // it is a Sunday
        numSundays += 1;
      }
    }
  }
}
console.log(`Number of Sundays from 1901 through 2000 is ${numSundays}`);

// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
