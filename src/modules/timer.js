const timer = (deadline) => {
  const timerDays = document.getElementById('timer-days');
  const timerHours = document.getElementById('timer-hours');
  const timerMinutes = document.getElementById('timer-minutes');
  const timerSeconds = document.getElementById('timer-seconds');

  const addZero = (num) => {
    return num < 10 ? `0${num}` : num;
  }

  const getTimeRemaining = () => {
    let dateStop = new Date(deadline).getTime();
    let dateNow = new Date().getTime();
    let timeRemaining = (dateStop - dateNow) / 1000;
    let days = Math.floor((timeRemaining / 60 / 60 / 24));
    let hours = Math.floor((timeRemaining / 60 / 60) % 24);
    let minutes = Math.floor((timeRemaining / 60) % 60);
    let seconds = Math.floor(timeRemaining % 60);

    if (seconds < 0) {
      days = hours = minutes = seconds = 0;
    }

    return {
      timeRemaining,
      days,
      hours,
      minutes,
      seconds,
    }
  }

  const updateClock = () => {
    let getTime = getTimeRemaining();
    timerDays.textContent = addZero(getTime.days);
    timerHours.textContent = addZero(getTime.hours);
    timerMinutes.textContent = addZero(getTime.minutes);
    timerSeconds.textContent = addZero(getTime.seconds);

    if (getTime.timeRemaining <= 0) clearInterval(timerInterval);
  }
  const timerInterval = setInterval(updateClock, 1000);
  updateClock();
}

export default timer;