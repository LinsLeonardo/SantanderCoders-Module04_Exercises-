
const first = 'first'
const second = 'second'
const third = 'third'

async function generateList(){
  const firstList = await createList(first)
  const secondList = await createList(second)
  const thirdList = await createList(third)

  const fullList = Promise.allSettled([firstList, secondList, thirdList]);
  const data = await fullList;
  const dataToShow = data.flatMap (item => item.value);
  printAllArraysInOne(dataToShow, 'allArrays')
}


function printAllArraysInOne(array, receivedId){
  const currentUl = document.getElementById(receivedId)
  const list = document.createElement('li')

  for(const index in array){
    console.log('index', index)
    console.log('length', array.length -1)
    if(index != (array.length-1)){
      list.innerText += array[index] + ','
      currentUl.appendChild(list)
    }
    else{
    list.innerText += `${array[index]}`
    currentUl.appendChild(list)}
  }
}

function createArray(){
  const length = generateRandomNumber()
  let array = []
  for(let i = 0; i < length; i++){
    array = [...array, generateRandomNumber()]
  }
  return array
}

const generateRandomNumber = () => Math.round(Math.random()*10)

async function createList(receivedId) {
  const time = Math.round(Math.random()*2000)
  const promise = new Promise ((resolve)=> setTimeout(resolve, time, createArray()))
  const array = await promise
  printArrayOnScreen(array, receivedId)
  return array
}

function printArrayOnScreen(array, receivedId){
  const currentUl = document.getElementById(receivedId)

  if(array.length === 0) {
    const list = document.createElement('li')
    list.innerText = '[Ø]'
    currentUl.appendChild(list)
    return
  }

  for(number of array){
    const list = document.createElement('li')
    list.innerText = number
    currentUl.appendChild(list)
  }
}