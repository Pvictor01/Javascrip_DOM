function analyzeNumber() {
  const showAnalyze = document.getElementById('result-analyze')
  const result = document.createElement('p')
  const getNumber = document.getElementById('number').value

  if(getNumber % 2 === 0) {
    result.innerText = 'O numéro ' + getNumber + ' é PAR'
  } else {
    result.innerText = 'O numéro ' + getNumber + ' é IMPAR'
  }

  showAnalyze.appendChild(result)
  
  document.getElementById('number').value = ''
}