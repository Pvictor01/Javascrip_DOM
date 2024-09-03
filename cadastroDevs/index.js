function createLabel(htmlFor, text) {
  const label = document.createElement('label')
  label.htmlFor = htmlFor
  label.innerText = text
  return label
}

function createInput(id, name, value, type = 'text') {
  const input = document.createElement('input')
  input.id = id
  input.type = type
  input.name = name
  input.value = value
  return input
}

const form = document.getElementById('order-form')
const addTechBtn = document.getElementById('addTechBtn')
const developers = []
let count = 0

addTechBtn.addEventListener('click', function() {
  const stackInputs = document.getElementById('stackInputs')
  const newRow = document.createElement('li')

  const newUpdate = count ++
  newRow.id = 'newStack-' + newUpdate
  newRow.className = 'inputRow'

  const newTechLabel = createLabel('techName-' + newUpdate, 'Nome da Tecnologia')
  const newTechInput = createInput('techName-' + newUpdate, 'techname', null)

  const expLabel = createLabel(null, 'Experiência: ')
  const id1 = 'expRadio-' + newUpdate + '.1'
  const expRadio1 = createInput(id1, 'techExp-' + newUpdate, '0-2 anos', 'radio')
  const expLabel1 = createLabel(id1, '0-2 anos')

  const id2 = 'expRadio-' + newUpdate + '.2'
  const expRadio2 = createInput(id2, 'techExp-' + newUpdate, '3-4 anos', 'radio')
  const expLabel2 = createLabel(id2, '3-4 anos')

  const id3 = 'expRadio-' + newUpdate + '.3'
  const expRadio3 = createInput(id3, 'techExp-' + newUpdate, '5+ anos', 'radio')
  const expLabel3 = createLabel(id3, '5+ anos')

  const removeRowButton = document.createElement('button')
  removeRowButton.innerText = 'Remover'
  removeRowButton.type = 'button'
  removeRowButton.addEventListener('click', function() {
    stackInputs.removeChild(newRow)
  })

  newRow.append(
    newTechLabel, newTechInput, expLabel, expRadio1, expLabel1, expRadio2, expLabel2, expRadio3, expLabel3, removeRowButton
  )
  
  stackInputs.appendChild(newRow)
})

form.addEventListener('submit', function(ev) {
  ev.preventDefault()

  const fullNameInput = document.getElementById('devName')
  const inputRows = document.querySelectorAll('.inputRow')

  let technologies = []

  inputRows.forEach(function(row) {
    const techName = document.querySelector('#' + row.id + ' input[name="techname"]').value
    const techExp = document.querySelector('#' + row.id + ' input[type="radio"]:checked').value
    technologies.push({name: techName, experience: techExp})
  })

  const newDev = {
    fullname: fullNameInput.value,
    technologies: technologies
  }
  developers.push(newDev)
  alert('New dev registered')

  fullNameInput.value = ''
  inputRows.forEach(function(row) {
    row.remove()
  })

  console.log(developers);
})