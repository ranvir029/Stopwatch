const display = document.getElementById("displayBox");
const start = document.getElementById("Start");
const stop1 = document.getElementById("Stop");
const reset = document.getElementById("Reset");
let timer = null;
let Starttime = 0;
let eclapsedTime = 0;
let isRunning = false;

start.onclick = function start() {
  if (!isRunning) {
    Starttime = Date.now() - eclapsedTime;
    timer = setInterval(update, 10);
    // yaha hamne setinterval mai dusre function ko calculate kiya hai
    isRunning = true;
  }
}

stop1.onclick = function stop() {
  if (isRunning) {
    clearInterval(timer);
    eclapsedTime = Date.now()- Starttime;
    isRunning = false;
  }
}

reset.onclick = function reset() {
  if (isRunning) {
    clearInterval(timer);
    timer = 0;
    Starttime = 0;
    eclapsedTime = 0;
    isRunning = false;
  }
  display.innerHTML = `00:00:00:00`;
}

function update() {
  const currenttime = Date.now();
  eclapsedTime = currenttime - Starttime;
  let hours = Math.floor(eclapsedTime / (1000 * 60 * 60));
  let minutes = Math.floor((eclapsedTime / (1000 * 60)) % 60);// hamne yaha minutes ko millisecond mai
  // convert karne ke baad hamne 60 se modulus isliye kiya hai taki wo reminder 0 
  // aa jaye aur 60 se jayad count na ho 
  // same concept ham seconds aur milliseconds ke sath lagenge
  let seconds = Math.floor((eclapsedTime / 1000) % 60);
  let millisecond = Math.floor((eclapsedTime % 1000) / 10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  millisecond = String(millisecond).padStart(2, "0");
  display.textContent = `${hours}:${minutes}:${seconds}:${millisecond}`;
}
