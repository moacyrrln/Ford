const mensagem = "FORD GI";
const mensagemSplit = mensagem.split('');

const listaDeCaracteres = [];

for (let i = 0; i <= 254; i++) {
  listaDeCaracteres.push(String.fromCharCode(i));
}

let criptografia = [];
let validarCriptografia = 0;

do {
  criptografia = [];
  validarCriptografia = 0;
  for (let i = 0; i <= 254; i++) {
    firstChar = String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65));
    secondChar = String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65));
    third = String.fromCharCode(parseInt(Math.random() * (90 - 65) + 65));
    sequencia = firstChar.concat(secondChar).concat(third);
    criptografia.push(sequencia);
  }
  const validar = criptografia.sort();
  for (let i = 0; i <= 253; i++) {
    if (validar[i] === validar[i+1]) validarCriptografia++;
  }
}
while(validarCriptografia > 0)


let criptografado = []


mensagemSplit.map(letra => {
  let posicao = (listaDeCaracteres.indexOf(letra));
  criptografado.push(criptografia[posicao]);

})


console.log(criptografado);
console.log(criptografado.join(''));