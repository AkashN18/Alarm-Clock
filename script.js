const clock = document.getElementById("clock");
const alarmTimeInput = document.getElementById("alarm-time");
const setAlarmBtn = document.getElementById("set-alarm");
const clearAlarmBtn = document.getElementById("clear-alarm");
const status = document.getElementById("status");
const alarmAudio = document.getElementById("alarm-audio");

let alarmTime = null;
let alarmTimeout = null;

// Update clock every second
function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString("en-GB", { hour12: false });
  clock.textContent = timeString;

  // Check if alarm time matches current time
  if (alarmTime && timeString === alarmTime) {
    triggerAlarm();
  }
}

function triggerAlarm() {
  alarmAudio.play();
  status.textContent = "🔔 Alarm ringing!";
  clearAlarm(); // Auto-clear after ringing
}

function setAlarm() {
  const timeValue = alarmTimeInput.value;
  if (!timeValue) {
    alert("Please select a valid time.");
    return;
  }

  alarmTime = timeValue + ":00"; // Add seconds for comparison
  status.textContent = `Alarm set for ${alarmTime}`;
}

function clearAlarm() {
 alarmTime = null;
  alarmTimeInput.value = "00:00"; // Reset input to 00:00
  status.textContent = "Alarm cleared.";
  alarmAudio.pause();
  alarmAudio.currentTime = 0;

}

// Event listeners
setAlarmBtn.addEventListener("click", setAlarm);
clearAlarmBtn.addEventListener("click", clearAlarm);

// Start clock
setInterval(updateClock, 1000);