function addContact() {
  const contactSection = document.getElementById('contacts-list') //atribuindo pelo id ao input do html

  const h3 = document.createElement('h3') //titulo da section
  h3.innerText = 'Contato'

  const ul = document.createElement('ul') //lista dentro da section

  const nameLi = document.createElement('li') //criando lista com li e input e atribuindo seu tipo
  nameLi.innerText = 'Nome: '
  const nameInput = document.createElement('input')
  nameInput.type = 'text'
  nameInput.name = 'fullname'
  nameLi.appendChild(nameInput)
  ul.appendChild(nameLi)
  ul.appendChild(document.createElement('br')) //adicionando codigo br do html

  const phoneLi = document.createElement('li')
  phoneLi.innerText = 'Telefone'
  const phoneInput = document.createElement('input')
  phoneInput.type = 'text'
  phoneInput.name = 'phone'
  phoneLi.appendChild(phoneInput)
  ul.appendChild(phoneLi)
  ul.appendChild(document.createElement('br'))

  contactSection.append(h3, ul)
}

function removeContact() {
  const contactSection = document.getElementById('contacts-list')

  const title = document.getElementsByTagName('h3')
  const contacts = document.getElementsByTagName('ul')

  contactSection.removeChild(title[title.length - 1])
  contactSection.removeChild(contacts[contacts.length - 1])
}