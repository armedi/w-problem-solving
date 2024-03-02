/**
 * @param {string} time - A string representing time in 12-hour format hh:mm:ssAM or hh:mm:ssPM
 */
export function timeConversion(time) {
  // first use regex to extract the hour and AM/PM
  const timeRegex = /^(\d{2})(.+)(AM|PM)$/;
  const match = time.match(timeRegex);

  const amPm = match[3];
  let hour = parseInt(match[1], 10);

  if (amPm === "AM") {
    if (hour === 12) {
      hour = 0;
    }
  } else if (hour !== 12) {
    hour += 12;
  }

  return `${hour.toString().padStart(2, "0")}${match[2]}`
}

function main(time) {
  const result = timeConversion(time);
  console.log(result);
}

if (process.env.NODE_ENV !== "test") {
  main("12:01:00PM");
  main("12:01:00AM");
  main("02:01:00PM");
  main("08:01:00AM");
}
