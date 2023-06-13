function show() {
  // Obter um elemento único a partir do seu id
  const contactList = document.getElementById("contact-list")
  console.log(contactList)
}

function show2() {
  // Obter vários elementos (HTMLCollection) a partir de um nome de tag
  const liElements = document.getElementsByTagName("li")
  console.log(liElements)
}

function show3() {
  // Obter vários elementos (HTMLCollection) a partir de uma classe
  const contactInputs = document.getElementsByClassName("contact-input")
  console.log(contactInputs)
}

function show4() {
  // Obter vários elementos (NodeList) a partir do atributo name
  const contact1 = document.getElementsByName("contact1")
  console.log(contact1)
}

function show5() { //método mais flexível
  // Obter vários elementos (NodeList) a partir de uma query (semelhante aos seletores do CSS)
  const contacts = document.querySelectorAll("#contact-list > li > label")
  console.log(contacts)
}

/* - Além disso, também é possível obter um único elemento através de uma query. O comportamento é igual ao do querySelectorAll(), porém selecionando o primeiro elemento que corresponder à query:
Obs.: Repare que também podemos acessar propriedade internas do elemento obtido.*/

function show5() {
  const contact = document.querySelector('#contact-list > li > label');
  console.log(contact);
  console.log(contact.textContent);
}