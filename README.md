# Respostas para o Estágio Ribeirão Preto 2024 - Target Sistemas

Respostas abaixo em Typescript( Também localizadas nos arquivos na pasta Questions):

- Questão 01

```ts
const indice = 13;
let soma = 0;
let k = 0;


for(k; k < indice; k++){
  soma+=k
}

console.log(soma);
```

- Questão 02

```ts
const createFibonacci = (n: number): number[] => {
  let sequence = [];
  let firstNumber = 0;
  let secondNumber = 1;

  for (let i = 0; i < n; i++) {
      sequence.push(firstNumber);
      let calcNumber = firstNumber;
      firstNumber = secondNumber;
      secondNumber = calcNumber + secondNumber;
  }

  return sequence;
};

const verifyFibonacciNumber = (sequenceNumber, searchNumber) => {
  const fibSequence = createFibonacci(sequenceNumber);
  if(fibSequence.includes(searchNumber)){
    return console.log(`O número ${searchNumber} foi encontrado na sequência: ${fibSequence}`);
  }
  return console.log(`O número ${searchNumber} não pertence à sequência: ${fibSequence}`)
};


const sequenceNumber = 10;
const searchNumber = 4;

verifyFibonacciNumber(sequenceNumber, searchNumber);
```

- Questão 05

```ts
const reverseString = (str: string): string => {
  let reversedStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
      reversedStr += str[i];
  }
  return reversedStr;
}


const originalString = "Target Sistemas";
const reversedString = reverseString(originalString);
console.log("String original:", originalString);
console.log("String invertida:", reversedString);
```
