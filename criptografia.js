const mensagem = "FORD GI";
const mensagemSplit = mensagem.split('');

const listaDeCaracteres = [];

for (let i = 0; i <= 254; i++) {
  listaDeCaracteres.push(String.fromCharCode(i));
}

let criptografia = [];
let validarCriptografia = 0;

while(validarCriptografia > 0) {
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

console.log('criptografia', criptografia)

let criptografado = []


mensagemSplit.map(letra => {
  console.log(letra);
  console.log((listaDeCaracteres.indexOf(letra)));
  let posicao = (listaDeCaracteres.indexOf(letra));
  console.log()
  criptografado.push(criptografia[posicao]);
})

console.log(criptografado);