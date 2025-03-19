'use strict';

const population = document.querySelectorAll('.population');

const numbers = [...population]
  .map((span) => Number(span.textContent.replace(/\D/g, '')))
  .filter((num) => !isNaN(num) && num !== 0);

if (numbers.length > 0) {
  const average = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;
  const rezult = Math.round(average).toLocaleString();

  const averageSpan = document.querySelector('.average-population');

  if (averageSpan) {
    averageSpan.textContent = rezult;
  }

  const totalSpan = document.querySelector('.total-population');

  if (totalSpan) {
    totalSpan.textContent = rezult;
  }
}
