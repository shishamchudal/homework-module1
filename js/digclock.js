// Create a time data function
function currentTime() {
  var d = new Date();
  var hr = d.getHours();
  var min = d.getMinutes();
  var sec = d.getSeconds();
  var ampm;

  var utchr = d.getUTCHours();
  var timeDiff = utchr - hr;

  if (timeDiff < 0) {
    timeDiff += 24; // Adding 24 hours to normalize the difference
  }

  if (timeDiff < 0) {
    adjTimeDiff = -timeDiff;
  } else {
    adjTimeDiff = timeDiff;
  }
  //var adjTimeDiff;
  var timeZone; // PM,MT,CT,ET
  switch (adjTimeDiff) {
    case 8:
      timeZone = "PT"; // Pacific Time (UTC - 8)
      break;
    case 7:
      timeZone = "MT"; // Mountain Time (UTC - 7)
      break;
    case 6:
      timeZone = "CT"; // Central Time (UTC - 6)
      break;
    case 5:
      timeZone = "ET"; // Eastern Time (UTC - 5)
      break;
    default:
      timeZone = "Unknown Zone"; // Catch-all for other cases
  }

  // Add 0 single digits for seconds
  if (sec < 10) {
    sec = "0" + sec;
  }
  // Add 0 single digits for minutes
  if (min < 10) {
    min = "0" + min;
  }

  // Determine AM or PM string
  if (hr == 12) {
    ampm = "PM";
  } else if (hr > 12) {
    hr -= 12;
    ampm = "PM";
  } else {
    ampm = "AM";
  }
  // Assemble time format to display
  var time = hr + ":" + min + ":" + sec + " " + ampm + " " + timeZone;

  //Display current local time and time zone on HTML elements
  document.getElementById("clock").innerHTML = time;

  setInterval(currentTime, 1000);
}

currentTime();
