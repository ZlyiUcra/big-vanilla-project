import {createGreetingMessages, ManType} from "./05_01";

let people: Array<ManType>;

beforeEach(() => {
  people = [
    {name: "Andrew Ivanov", age: 33},
    {name: "Alex Petrov", age: 24},
    {name: "Dima Sidorov", age: 33}
  ]
})

test(" should get array of greetings", () => {
  const messages = createGreetingMessages(people);

  expect(messages.length).toBe(people.length);
  expect(messages[0]).toBe("Hello Andrew. Welcome to IT-INCUBATOR!")
  expect(messages[1]).toBe("Hello Alex. Welcome to IT-INCUBATOR!")
  expect(messages[2]).toBe("Hello Dima. Welcome to IT-INCUBATOR!")
});