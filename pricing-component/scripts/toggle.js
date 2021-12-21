document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementsByTagName("label")[0]
  const plans = document.getElementsByTagName('h2')

  el.addEventListener("click", () => {
    for (var i = 0; i < plans.length; i++) {
      plans[i].classList.toggle("show")
    }
  })
})
