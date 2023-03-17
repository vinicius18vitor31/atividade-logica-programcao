let fibonacciAnterior = 0; // Valor de fibonacci anterior
let fibonacciNovo = 1; // Valor de fibonacci atual
let isFibonacci = false; // Variável para armazenar se o número é fibonacci
let valorParaVerificar = 21; // Variável com número para ser verificado

while (fibonacciAnterior <= valorParaVerificar) {
  const anterior = fibonacciAnterior;
  const novo = fibonacciNovo;

  if (valorParaVerificar === fibonacciAnterior) {
    isFibonacci = true;
  }

  fibonacciAnterior = novo;
  fibonacciNovo = anterior + novo;
}

if (isFibonacci) {
  console.log(`${valorParaVerificar} é um número fibonacci!`);
} else {
  console.log(`${valorParaVerificar} não é um número fibonacci!`);
}