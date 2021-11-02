# SantanderCoders - Módulo 04

# Calculadora
A calculadora possui dois espaços de tela para exibir as operações realizadas. O primeiro é responsável por exibir a operação atual, e o segundo exibe o resultado da última operação (desde que a calculadora não tenha sido zerada através do botão C). 

![imagem da calculadora](https://github.com/LinsLeonardo/SantanderCoders-Module04_Exercises-/blob/main/Calculadora/img/calculadora_2.png)
![imagem da calculadora](https://github.com/LinsLeonardo/SantanderCoders-Module04_Exercises-/blob/main/Calculadora/img/calculadora_3.png)

A calculadora possui as seguintes funções:

- `insert()`
  - Função usada nas teclas numéricas, para salvar os números digitados pelo usuário em formato de strings e escrevê-los em tela.

- `verifyOperator(operador)`
  - Verifica se o usuário apertou em operadores seguidos, substituindo o operador anterior pelo atual.

- `operator(operador)`
  - Verifica se o usuário está tentando iniciar a conta com um operador;
  - Verifica se há algum valor em tela (inputNumbers) e salva o valor e o operador em um array para cálculo;
  - Caso o tamanho do array `arrayToCalc` seja maior que 3, chama a função **equal()** para realizar a operação, salvando o resultado como posição inicial do array e o operador como segunda posição
    - Caso de uso: Ao digitar "3+4+" sem pressionar o botão igual (=), a calculadora executa a soma e o novo array passa a ser [7, +]

- `equal()`
  - Verifica se as condições para a execução da operação são atendidas (que exista um array com tamanho mínimo de 3 posições)
  - Executa a operação conforme o operador pressionado pelo usuário

- `clean()`
  - Usada para limpar todos os parâmetros da calculadora, função chamada no **botão C**

## Para visualização
- O funcionamento pode ser verificado através do seguinte [link](https://codepen.io/l-o-lins/pen/BadmENe).
