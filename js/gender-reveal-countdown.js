const revealDate = new Date("Dec 30, 2020 12:00:00").getTime();

let x = setInterval(function() {
    let now = new Date().getTime();
    let endtime = revealDate - now;
    let days = Math.floor(endtime / (1000 * 60 * 60 * 24));
    let hours = Math.floor((endtime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((endtime % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((endtime % (1000 * 60)) / 1000);

  document.getElementById("days").innerHTML = days + "<span style='font-size: 50%;'>d</span>";
  document.getElementById("hours").innerHTML = hours + "<span style='font-size: 50%;'>h</span>";
  document.getElementById("minutes").innerHTML = minutes + "<span style='font-size: 50%;'>m</span>";
  document.getElementById("seconds").innerHTML = seconds + "<span style='font-size: 50%;'>s</span>";

  // If the count down is finished, write some text
  if (endtime < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "It's a....";
  }
}, 1000);