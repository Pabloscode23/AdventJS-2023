function calculateTime(deliveries) {
  const addNegativeSign = (add) => {
    return add ? "-" : "";
  };

  const addLeftZero = (time) => {
    return time >= 10 ? "" : "0";
  };

  const strToTimeSeconds = (str) => {
    const splittedStr = str.split(":");
    const hours = +splittedStr[0];
    const minutes = +splittedStr[1];
    const seconds = +splittedStr[2];

    return hours * 3600 + minutes * 60 + seconds;
  };

  const timeSecondsToStr = (time) => {
    const negativeSign = addNegativeSign(time > 0);
    const absTime = Math.abs(time);
    const hours = Math.floor(absTime / 3600);
    const minutes = Math.floor((absTime % 3600) / 60);
    const seconds = (absTime % 3600) % 60;

    const strHours = `${negativeSign}${addLeftZero(hours)}${hours}`;
    const strMinutes = `${addLeftZero(minutes)}${minutes}`;
    const strSeconds = `${addLeftZero(seconds)}${seconds}`;

    return `${strHours}:${strMinutes}:${strSeconds}`;
  };

  const maxTimeStr = "07:00:00";
  const maxTime = strToTimeSeconds(maxTimeStr);
  let accumulatedTime = 0;

  for (let i = 0; i < deliveries.length; i++) {
    accumulatedTime += strToTimeSeconds(deliveries[i]);
  }

  const differenceTime = timeSecondsToStr(maxTime - accumulatedTime);
  return differenceTime;
}
