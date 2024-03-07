
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