// array of month names
const month_names = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const date = new Date();
const thisYear = date.getFullYear();
const nextDate = date.getDate() + 1;
const thisMonth = date.getMonth();
let thisMonthSpell;

// checking exact month names
for (let index in month_names) {
  if (index == thisMonth) {
    thisMonthSpell = month_names[index];
  }
}

// end date dynamic
const endDate = `${nextDate} ${thisMonthSpell} ${thisYear} 10:00 PM`;
// const endDate = "27 January 2024 10:00 PM";

// display end time
document.getElementById("end-date").innerText = endDate;

// select all input tags
const inputs = document.querySelectorAll("input");
// select all label tags
const labels = document.querySelectorAll(".lt");

const clock = () => {
  const endTime = new Date(endDate);
  const nowTime = new Date();

  //   calculate time gap in seconds
  const timeGap = (endTime - nowTime) / 1000;

  // when time gap < 0 then all value set into 0
  if (timeGap < 0) {
    return;
  }

  const remainingDays = Math.floor(timeGap / 3600 / 24);
  const remainingHours = Math.floor(timeGap / 3600) % 24;
  const remainingMinutes = Math.floor(timeGap / 60) % 60;
  const remainingSeconds = Math.floor(timeGap % 60);

  if (remainingDays <= 1) {
    labels[0].textContent = "Day";
  } else {
    labels[0].textContent = "Days";
  }

  if (remainingHours <= 1) {
    labels[1].textContent = "Hour";
  } else {
    labels[1].textContent = "Hours";
  }

  if (remainingMinutes <= 1) {
    labels[2].textContent = "Minute";
  } else {
    labels[2].textContent = "Minutes";
  }

  if (remainingSeconds <= 1) {
    labels[3].textContent = "Second";
  } else {
    labels[3].textContent = "Seconds";
  }

  //   calculate remaining days
  inputs[0].value = remainingDays;
  //   calculate remaining hours
  inputs[1].value = remainingHours;
  //   calculate remaining minutes
  inputs[2].value = remainingMinutes;
  //   calculate remaining seconds
  inputs[3].value = remainingSeconds;
};

setInterval(() => {
  clock();
}, 1000);
