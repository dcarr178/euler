// capture start time
const startTime = process.hrtime();
import { Constants } from '../shared/utils';

const numberOfPaths: any = {};

const calculatePaths = (x: number, y: number) => {

  let answer = 0;
  x = -Math.abs(x);
  y = -Math.abs(y);

  // look to see if this answer has already been calculated and stored
  if (numberOfPaths[`${x} ${y}`]) return numberOfPaths[`${x} ${y}`];

  if (x === 0 || y === 0) {
    // this point is on right or bottom edge of grid so only one path exists
    answer = 1;
  } else {
    // add the number of paths from one point left and one point right
    answer = calculatePaths(x + 1, y) + calculatePaths(x, y + 1)
  }

  // store the result so we naver have to calcualte it again
  numberOfPaths[`${x} ${y}`] = answer;
  console.log(`point (${x},${y}) has ${answer} patha`);

  return answer;

};

calculatePaths(1, 1);
console.log();
calculatePaths(2, 2);
console.log();
calculatePaths(20, 20);
console.log();

// display run time
const runTime = process.hrtime(startTime);
console.log(`Program took ${runTime[0] + (runTime[1] / Constants.NS_PER_SEC)} seconds`);
