const day = document.querySelector("#currentDay");
const UTC = document.querySelector("#currentUTC");

const displayCurrDay = () => {
  const weekDays = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const today = new Date();
  const currentDay = weekDays[today.getUTCDay()];
  day.textContent = currentDay;
};

const displayTimeMilli = () => {
  const today = new Date();
  const currentUTC = today.getTime();
  console.log(currentUTC);
  UTC.textContent = currentUTC;
};

setInterval(displayTimeMilli, 1000);
displayCurrDay();
