/*
Construa uma página web que permita montar a escalação de um time de jogadores. Nele deverá ser possível:
- Escalar um jogador
    - Informar a posição do jogador a ser escalado para o time.
    - Informar o nome do jogador.
    - Informar o número da camisa do jogador.
    - Ter um botão “Escalar” que pergunta ao usuário se ele deseja confirmar a escalação daquele jogador e então insere as informações em uma lista na página.
    - Após o jogador ser escalado os campos de texto devem ser limpos.
- Remover um jogador
    - Informar o número da camisa do jogador.
    - Ter um botão “Remover” que pergunta ao usuário se ele deseja confirmar a remoção daquele jogador e então exclui ele da lista na página.
    - Após o jogador ser removido o campo de texto deve ser limpo.

Dica: lembrando que é possível acessar o texto de um input através da propriedade value.
*/

function addPlayer() {
  const teamList = document.getElementById('team-list')

  const playerPosition = document.getElementById('player-position').value
  const playerName = document.getElementById('player-name').value
  const shirtNumber = document.getElementById('player-number').value

  const confirmation = confirm(`
    Deseja escalar o seguinte jogador?
    \nPosição: ${playerPosition}
    \nNome: ${playerName}
    \nNúmero da camisa: ${shirtNumber}
  `)

  if(confirmation) {
    const getTeam = document.createElement('li')
    getTeam.id = 'number-' + shirtNumber
    getTeam.innerText = `Posição: ${playerPosition}, Nome: ${playerName}, Número da Camisa: ${shirtNumber}`
    teamList.appendChild(getTeam)

    document.getElementById('player-position').value = ''
    document.getElementById('player-name').value = ''
    document.getElementById('player-number').value = ''
  } else {
    alert('Jogador não escalado')
  }
}

function removePlayer() {
  const numberRemove = document.getElementById('number-remove').value
  const playerToRemove = document.getElementById('number-' + numberRemove)

  const confirmation = confirm(`Deseja remover o seguinte jogador? \n${playerToRemove.innerText}`)

  if(confirmation) {
    //document.getElementById('team-list').removeChild(playerToRemove)
    playerToRemove.remove()
    document.getElementById('number-remove').value = ''
  }
}