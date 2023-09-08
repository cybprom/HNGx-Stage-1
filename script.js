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

  // console.log(currentUTC.toString());

  // Can actually just use Date.now()
  console.log(Date.now());

  const currentUTC = today.getTime();
  UTC.textContent = currentUTC;
};

const displayTimeMilli = () => {
  // const today = new Date();
  // const currentUTC = today.getTime();
  // console.log(currentUTC.toString());
  // UTC.textContent = currentUTC;
};

// setInterval(displayTimeMilli, 100);
setInterval(displayCurrDay, 1000);
displayCurrDay();
