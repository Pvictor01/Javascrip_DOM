function useLightTheme() {
  document.body.style.color = '#212529'
  document.body.style.backgroundColor  = 'rgb(189, 189, 233)'
}

function useDarkTheme() {
  document.body.style.color = '#f1f5f9'
  document.body.style.backgroundColor  = '#212529'
}

function switchTheme() {
  document.body.classList.toggle('is-light')
  document.body.classList.toggle('is-dark')
}

document.getElementById('light-button').addEventListener('click', useLightTheme)
document.getElementById('dark-button').addEventListener('click', useDarkTheme)
document.getElementById('switch-button').addEventListener('click', switchTheme)