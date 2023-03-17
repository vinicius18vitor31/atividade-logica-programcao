const stringParaInverter = "Olá Mundo!";
let stringInvertida = "";

for (let i = stringParaInverter.length; i > 0; i--) {
  stringInvertida += stringParaInverter[i - 1];
}

console.log(stringInvertida);