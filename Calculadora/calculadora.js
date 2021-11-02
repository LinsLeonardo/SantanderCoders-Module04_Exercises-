let allUserInputs = '' 
let operation = '' 
let  inputNumbers = '' 
let arrayToCalc = []
const operators = ['+', '-', '/', '*']
let salvarInput = ''
const operationScreen = document.querySelector('#valorOperacao')
const resultScreen = document.querySelector('#finalValue')
 
function insert(num){
 
  const firstScreen = operationScreen.innerText
  inputNumbers = inputNumbers + num

  if(+firstScreen === arrayToCalc[0]){
    operationScreen.innerText =  num
    arrayToCalc = []
    resultScreen.innerText = ''
        return
  }
   operationScreen.innerText = firstScreen + num
}


function verifyOperator ( operador){
    if(operador !== arrayToCalc[arrayToCalc.length-1]){
      arrayToCalc.length = 1
      arrayToCalc = [...arrayToCalc, operador]
      return arrayToCalc
  } 
}


function operator(operador){
  const firstScreen = operationScreen.innerText
  const divResults = resultScreen

  if(inputNumbers === '' && arrayToCalc.length === 0){
    alert('Não é permitido começar com operador')
    return
  }
  if(inputNumbers !== ''){
    arrayToCalc = [...arrayToCalc, inputNumbers, operador]
    operationScreen.innerText = inputNumbers + operador
    salvarInput = inputNumbers
  }
  else{
    verifyOperator(operador)
    if(divResults.innerText === ''){
      operationScreen.innerText = salvarInput + operador
    }
    else{
    operationScreen.innerText = divResults.innerText + operador}
  }
 
  if(arrayToCalc.length > 3){
    equal()
    operationScreen.innerText = operation + operador
    arrayToCalc = [...arrayToCalc,  operador]
  }

  inputNumbers = ''
  
}


function equal(){
  if(arrayToCalc.length === 0 ){
    return  }

  if(arrayToCalc.length < 3 && inputNumbers === ''){
    return
  }

  const divResults = resultScreen
  arrayToCalc = [...arrayToCalc, inputNumbers]
  inputNumbers = ''
 
  const [valor1, operador, valor2] = arrayToCalc
  if(operador === '+'){
    operation = +valor1 + +valor2
    operationScreen.innerText = operation
  } 
  if(operador === '-'){
    operation = valor1 - valor2
    operationScreen.innerText = operation
  } 
  if(operador === '*'){
    operation = valor1 * valor2
    operationScreen.innerText = operation
  }
  if(operador === '/'){
    operation = valor1 / valor2
    operationScreen.innerText = operation
  }
  
  divResults.innerText = operation
  arrayToCalc = [operation]
  operationScreen.innerText = operation

}

function clean(){
  operationScreen.innerText = '' 
  resultScreen.innerText = ''
  allUserInputs = '' 
  operation = '' 
  inputNumbers = '' 
  arrayToCalc = []
  salvarInput = ''
}