import {CityType, GovernmentBuildingType} from "../02/02_02";

export const demolishHousesOnTheStreet = (city: CityType, streetName: string) => {
  city.houses = city.houses.filter(house => house.address.street.title !== streetName)
};

export const getBuildingsWithStaffCountGreaterThen = (governmentBuildings: Array<GovernmentBuildingType>, number: number) => {
  return governmentBuildings.filter(building => building.staffCount > number)
}