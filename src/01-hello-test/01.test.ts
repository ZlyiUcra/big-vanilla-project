import {mult, splitIntoWord, sum} from "./01";

//data
let a: number;
let b: number;
let c: number;

beforeEach(()=>{
  a = 1;
  b = 2;
  c = 3;
})

test("sum should be correct", () => {

  //action
  const result = sum(a, b);
  const result2 = sum(b, c);

  // expect result
  expect(result).toBe(3);
  expect(result2).toBe(5);
})

test("mult should be correct", () => {

  //action
  const result = mult(a, b);
  const result2 = mult(b, c);

  // expect result
  expect(result).toBe(2);
  expect(result2).toBe(6);
})
test("splitIntoWord should be correct", () => {
  //data
  const sentese1 = "Hello my friends!";
  const sentese2 = "JS - the programming language.";
  const c = 6;

  //action
  const result = splitIntoWord(sentese1);
  const result2 = splitIntoWord(sentese2);

  // expect result
  expect(result.length).toBe(3);
  expect(result[0]).toBe('hello');
  expect(result[1]).toBe('my');
  expect(result[2]).toBe('friends');

  expect(result2.length).toBe(4);
  expect(result2[0]).toBe('js');
  expect(result2[1]).toBe('the');
  expect(result2[2]).toBe('programming');
  expect(result2[3]).toBe('language');
})