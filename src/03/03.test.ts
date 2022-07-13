import {StudentType} from "../02/02";
import {addSkill, doesStudentLivesIn, makeStudentActive} from "./03";

let student: StudentType;
beforeEach(() => {
  student = {
    id: 1,
    "name": "Oleksandr",
    age: 32,
    isActive: false,
    address: {
      streetTitle: "Some street",
      city: {
        title: "Some city",
        countryTitle: "Some country"
      }
    },
    technologies: [
      {
        id: 1,
        title: "HTML"
      },
      {
        id: 2,
        title: "CSS"
      },
      {
        id: 3,
        title: "React"
      }]
  };
});

test("new tech skill should be added", () => {
  expect(student.technologies.length).toBe(3);

  addSkill(student, "JS")

  expect(student.technologies.length).toBe(4);
  expect(student.technologies[3].title).toBe("JS")
  expect(student.technologies[3].id).toBeDefined()
});

test("student should be active", () => {
  expect(student.isActive).toBe(false);

  makeStudentActive(student)

  expect(student.isActive).toBe(true);
});
test("student should live in indicated city", () => {

  const res1 = doesStudentLivesIn(student, "Moscow")
  const res2 = doesStudentLivesIn(student, "Some city")

  expect(res1).toBe(false);
  expect(res2).toBe(true);
});