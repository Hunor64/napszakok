let night = false
function updateBackgroundAndGreeting() {
  const now = new Date();
  const hour = now.getHours();
  let background = 'night.png';
  
  if (hour >= 6 && hour < 10) {
    background = 'morning.png';
  } else if (hour >= 10 && hour < 20) {
    background = 'afternoon.png';
  }
  
  document.querySelector('body').style.backgroundImage = `url('src/${background}')`;
  console.log(`src/${background}`);
}

function updateTime() {
  let now = new Date();
let timeString = now.toLocaleTimeString('hu-HU', { timeZone: 'Europe/Budapest', hour12: false, hour: '2-digit', minute: '2-digit' });
  let seconds = now.getSeconds();
  let clockElement = document.getElementById('clock');
  clockElement.textContent = timeString;
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  clockElement.innerHTML += `<span class="seconds">:${seconds}</span>`;
}

function fetchQuote() {
  fetch('https://type.fit/api/quotes')
    .then(response => response.json())
    .then(quotes => {
      const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
      document.getElementById('quote').textContent = randomQuote.text;
    });
}

function UpdateWelcome() {
  const now = new Date();
  const hour = now.getHours();
  let greeting = 'GOOD MORNING';
  if (hour >= 10 && hour < 18) {
    greeting = 'GOOD AFTERNOON';
  }
  else if (hour >= 18 && hour < 22) {
    greeting = 'GOOD EVENING';
  document.getElementById('weather-icon').src = 'src/moon.svg';
}
  document.getElementById('greeting').textContent = greeting+", IT'S CURRENTLY";
}

document.getElementById('refresh-quote').addEventListener('click', fetchQuote);

function updateAll() {
  updateBackgroundAndGreeting();
  updateTime();
}
fetchQuote();
UpdateWelcome();
updateAll();
setInterval(updateAll, 1000);