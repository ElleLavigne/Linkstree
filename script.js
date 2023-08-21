// function toggleMode(){

//   const isLight = document.querySelector('html').classList.contains('light')
//   if (isLight) {
//     document.querySelector("html").classList.remove('light')
//   }

// }
function toggleMode() {
  const html = document.documentElement

  html.classList.toggle("light")
}