export const sum = (a: number, b: number) => {
  return a + b;
}
export const mult = (a: number, b: number) => {
  return a * b;
}

export const splitIntoWord = (sentence: string) => {
  return sentence.toLowerCase().trim().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]+/g, '').split(/\s+/);
}