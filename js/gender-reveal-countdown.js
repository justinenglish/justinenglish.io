const revealDate = new Date("Dec 28, 2020 15:00:00").getTime();

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

  if (endtime <= 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "Hold on to your excitement! You're being redirected to the gender reveal page.";
    document.getElementById("countdown").style.fontSize = "xx-large";
    document.getElementById("countdown").style.padding = "40px";

    window.setTimeout(function(){
      window.location.replace('https://justinenglish.github.io/justinenglish.io/gender-reveal/');
    }, 3500);
  }
}, 1000);