const form = document.getElementById('orderForm')

form.addEventListener('submit', function(event) {
  event.preventDefault()

  const name = document.querySelector('input[name="name"]').value
  const address = document.querySelector('input[name="address"]').value
  const breadType = document.querySelector('select[name="breadType"]').value
  const main = document.querySelector('input[name="main"]:checked').value
  const observations = document.querySelector('textarea[name="observations"]').value

  let salad = ''
  document.querySelectorAll('input[name="salad"]:checked').forEach(function(item) {
    salad += ' - ' + item.value + '\n'
  })

  console.log({
    name,
    address,
    breadType,
    main,
    observations,
    salad
  });

  alert(`
    Pedido Realizado!\n
    Nome do cliente: ${name}\n
    Endereço de entrega: ${address}\n
    Tipo de pão: ${breadType}\n
    Recheio: ${main}\n ${salad}\n
    Observações: ${observations}
  `)
})