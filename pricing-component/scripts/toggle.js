document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementsByTagName("label")[0];
  const monthly = document.getElementsByClassName("monthly");
  const annually = document.getElementsByClassName("annually");

  el.addEventListener("click", () => {
    for (var i = 0; i < monthly.length; i++) {
      monthly[i].classList.toggle("show");
      annually[i].classList.toggle("show");
    }
  })
});