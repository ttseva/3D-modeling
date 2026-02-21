'use strict'

const options = {
  hour12: true,
  hour: '2-digit',
  minute: '2-digit',
  second: '2-digit'
};

const output = document.querySelector('div');

const helloOutput = document.createElement('p');
const todayOutput = document.createElement('p');
const timeOutput = document.createElement('p');
const newYearOutput = document.createElement('p');

let dateNow = new Date();
let dateNewYear = new Date('31 December 2026').getTime();
let timeNow = new Date().getTime();
let hourNow = dateNow.getHours();
let dayTimeMsg;

if (hourNow >= 4 && hourNow <= 11) {
  dayTimeMsg = 'Доброе утро';
} else if (hourNow >= 12 && hourNow <= 16) {
  dayTimeMsg = 'Добрый день';
} else if (hourNow >= 17 && hourNow <= 20) {
  dayTimeMsg = 'Добрый вечер';
} else {
  dayTimeMsg = 'Доброй ночи';
}

const weekdays = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const todayWeekday = weekdays[(dateNow.getDay() + 6) % 7];

let timeRemaining = (dateNewYear - timeNow) / 1000;
let days = Math.floor((timeRemaining / 60 / 60 / 24));

helloOutput.textContent = dayTimeMsg + '!';
todayOutput.textContent = 'Сегодня: ' + todayWeekday;
timeOutput.textContent = dateNow.toLocaleTimeString('en-US', options);
newYearOutput.textContent = `До нового года осталось ${days} дней`

output.append(helloOutput, todayOutput, timeOutput, newYearOutput);

