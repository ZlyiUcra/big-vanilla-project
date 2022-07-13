import {StudentType} from "../02/02";
import {CityType, GovernmentBuildingType, HouseType} from "../02/02_02";

export const sum = (a: number, b: number) => {
  return a + b;
}

// const res = sum(sum(1, 2), sum(1, 3));
// const res2 = sum(2, 4);
export const addSkill = (student: StudentType, skill: string) => {
  student.technologies.push({id: new Date().getTime(), title: skill});
}

export const makeStudentActive = (student: StudentType) => {
  student.isActive = true;
}
export const doesStudentLivesIn = (student: StudentType, city: string) => {
  return student.address.city.title === city
}
export const addMoneyToBudget = (building: GovernmentBuildingType, budget: number) => {
  building.budget += budget;
}

export const repairHouse = (house: HouseType) => {
  house.repaired = true;
}

export const toFireStuff = (building: GovernmentBuildingType, stuffNumber: number) => {
  building.staffCount -= stuffNumber;
}

export const toHireStuff = (building: GovernmentBuildingType, stuffNumber: number) => {
  building.staffCount += stuffNumber;
}

export const createMessage = (city: CityType) => {
  return `Hello ${city.title} citizens. Be happy all ${city.citizensPopulation}`;
}