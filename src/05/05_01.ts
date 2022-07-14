export type ManType = {
  name: string;
  age: number;
};

export type DevType = { stack: string[], firstName: string, lastName: string };

export const people: Array<ManType> = [
  {name: "Andrew Ivanov", age: 33},
  {name: "Alex Petrov", age: 24},
  {name: "Dima Sidorov", age: 33}
];


const dimychTransformator = (man: ManType): DevType => {
  const [firstName, lastName] = man.name.split(" ")
  return {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName,
    lastName
  }
}

const devs = [
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Andrew",
    lastName: "Ivanov"
  },
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Alex",
    lastName: "Petrov"
  },
  {
    stack: ["css", "html", "js", "tdd", "react"],
    firstName: "Dima",
    lastName: "Sidorov"
  }
]
const devs3: Array<DevType> = people.map(dimychTransformator)

export const messages = people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR!`)

export const createGreetingMessages = (people: Array<ManType>) => {
  return people.map(man => `Hello ${man.name.split(" ")[0]}. Welcome to IT-INCUBATOR!`)
}