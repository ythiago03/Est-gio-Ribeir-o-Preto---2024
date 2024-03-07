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