function register(event) {
  console.log(event);
 // const getSection = button.parentNode.children
  const getSection = event.currentTarget.parentNode.children
  const username = getSection.username.value
  const password = getSection.password.value
  const passwordConfirmation = getSection.passwordConfirmation.value

  if(password === passwordConfirmation) {
    alert('Usuário "' + username + '" registrado')
  } else {
    alert('Senha incorreta')
  }
}

function removeEvent() {
  button.removeEventListener('click', register)
  alert('Elemento removido')
}

const button = document.getElementById('register-button')
button.addEventListener('click', register)

button.addEventListener('mouseover', function(event) {
  console.log(event.currentTarget);
})