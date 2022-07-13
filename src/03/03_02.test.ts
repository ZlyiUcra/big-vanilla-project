import {CityType} from "../02/02_02";
import {addMoneyToBudget, createMessage, repairHouse, toFireStuff, toHireStuff} from "./03";

let city: CityType;

beforeEach(() => {
    city = {
      title: "New York",
      houses: [
        {
          id: 1,
          buildedAt: 2012,
          repaired: false,
          address: {
            number: 100,
            street: {
              title: "White street"
            }
          }
        },
        {
          id: 2,
          buildedAt: 2008,
          repaired: false,
          address: {
            number: 100,
            street: {
              title: "Happy street"
            }
          }
        },
        {
          id: 3,
          buildedAt: 2020,
          repaired: false,
          address: {
            number: 101,
            street: {
              title: "Happy street"
            }
          }
        }
      ],
      governmentBuildings: [
        {
          type: "HOSPITAL",
          budget: 200000,
          staffCount: 200,
          address: {
            number: 101,
            street: {
              title: "Central street"
            }
          }
        },
        {
          type: "FIRE-STATION",
          budget: 500000,
          staffCount: 1000,
          address: {
            number: 101,
            street: {
              title: "South street"
            }
          }
        }
      ],
      citizensPopulation: 10000000
    }
  }
)
test("budget should be changes for HOSPITAL", () => {
  addMoneyToBudget(city.governmentBuildings[0], 100000);

  expect(city.governmentBuildings[0].budget).toBe(300000);
})

test("budget should be changes for FIRE-STATION", () => {
  addMoneyToBudget(city.governmentBuildings[1], -100000);

  expect(city.governmentBuildings[0].budget).toBe(200000);
});

// test("Houses should be destroyed", ()=>{
//   demolishHousesOnTheStreet(city, "Happy street");
//
//   expect(city.houses.length).toBe(1);
//   expect(city.houses[0].id).toBe(1)
// });

test("Houses should be repaired", () => {
  repairHouse(city.houses[1]);

  expect(city.houses[1]).toBeTruthy();
});
test("stuff should be decreased", () => {
  toFireStuff(city.governmentBuildings[0], 20);
  toFireStuff(city.governmentBuildings[1], 100);

  expect(city.governmentBuildings[0].staffCount).toBe(180);
  expect(city.governmentBuildings[1].staffCount).toBe(900);
});

test("stuff should be increased", () => {
  toHireStuff(city.governmentBuildings[0], 20);
  toHireStuff(city.governmentBuildings[1], 50);

  expect(city.governmentBuildings[0].staffCount).toBe(220);
  expect(city.governmentBuildings[1].staffCount).toBe(1050);
});

test("Greeting should be correct for city", () => {
  expect(createMessage(city)).toBe("Hello New York citizens. Be happy all 10000000");
});