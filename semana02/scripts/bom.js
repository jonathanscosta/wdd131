const input = document.querySelector('#favchap');
const botao = document.querySelector('button');
const lista = document.querySelector('list');

const li = document.createElement('li');
const botaoExcluir = document.createElement('button')

li.textContent = input.value;

botaoExcluir.textContent = '&times;'

li.append(botaoExcluir);
lista.append(li);