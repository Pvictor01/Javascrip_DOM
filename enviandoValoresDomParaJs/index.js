function register(element) {
  const username = document.getElementById('username').value
  const password = element.children.password.value
  const passwordConfirmation = element.children.passwordConfirmation.value

  if(password == '') {
    alert('Digite sua senha')
  } else if(password === passwordConfirmation) {
    alert(`Usuário "${username}" registrado!`)
  } else {
    alert('Senhas não conferem')
  }

  console.log(this)
}