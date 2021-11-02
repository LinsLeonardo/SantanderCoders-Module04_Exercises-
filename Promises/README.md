# SantanderCoders - Módulo 04

# Promises
Criação de *promises* com tempos aleatórios para serem resolvidas, após a resolução de todas as promises criadas, exibir os resultados em tela.
  - Os resultados deverão ser arrays com tamanhos aleatórios e preenchidos com números aleatórios.

- A aplicação possui quatro espaços destinados a exibir os resultados obtidos, sendo o primeiro a junção dos 3 arrays gerados, e os demais destinados a exibir cada um dos arrays de maneira individual. 

![Imagem da aplicação](https://github.com/LinsLeonardo/SantanderCoders-Module04_Exercises-/blob/main/Promises/img/promises_1.png)
![Imagem da aplicação](https://github.com/LinsLeonardo/SantanderCoders-Module04_Exercises-/blob/main/Promises/img/promises_2.png)

A aplicação possui as seguintes funções:

- `generateList()`
  - Cria três promises, resolvendo-as através de um `Promise.allSettled()` e criando um array com os valores obtidos pela resolução das promises.

- `printAllArraysInOne(array, receivedId)`
  - Recebe o array gerado pelo Promise.allSettled e imprime em tela para o usuário.

- `createArray()`
  - Cria um array de tamanho aleatório e preenche todas as posições com números randômicos.

- `createList(receivedId)`
  - Recebe o id da posição em tela onde o array deve ser exibido, gera um tempo aleatório para a resolução da promise e chama uma outra função para exibir o array gerado em seu respectivo compartimento. 

- `printArrayOnScreen(array, receivedId)`
  - Verifica se o tamanho do array é igual a 0 e, se sim, exibe um símbolo de vazio em tela.
  - Para cada número do array, cria uma nova lista para exibir o valor do número atual.

## Para visualização
- O funcionamento pode ser verificado através do seguinte [link](https://codepen.io/l-o-lins/pen/MWvOROp).
