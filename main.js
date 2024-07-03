var today = new Date();
var day = today.getDay();

var dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

document.querySelector(".today").innerHTML =
  "Current Day of the week: " + dayList[day];
console.log("Current Day of the week: " + dayList[day]);

var hour = today.getHours();
var minute = today.getMinutes();
var second = today.getSeconds();
var milliseconds = today.getMilliseconds();

var prepand = hour >= 12 ? " PM " : " AM ";
hour = hour >= 24 ? hour + 12 : hour;
if (hour === 0 && prepand === "PM") {
  if (minute === 0 && second === 0 && milliseconds === 0) {
    hour = 12;
    prepand = "Noon";
  } else {
    hour = 12;
    prepand = "PM";
  }
}
if (hour === 0 && prepand === " AM ") {
  if (minute === 0 && second === 0 && milliseconds === 0) {
    hour = 12;
    prepand = "Midnight";
  } else {
    hour = 12;
    prepand = " AM";
  }
}
document.querySelector(".time").innerHTML =
  "Current time: " + hour + ":" + minute + ":" + second + "." + milliseconds;
console.log(
  "Current time: " + hour + ":" + minute + ":" + second + ":" + milliseconds
);
