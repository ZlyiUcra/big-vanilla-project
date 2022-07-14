import {GovernmentBuildingType, HouseType} from "../02/02_02";

export const getStreetTitlesOfGovernmentBuildings = (governmentBuildings: Array<GovernmentBuildingType>) => {
  return governmentBuildings.map(b => b.address.street.title)
};

export const getStreetTitlesOfHouses = (houses: Array<HouseType>) => {
  return houses.map(h => h.address.street.title)
};
export const createMessages = (houses: Array<HouseType>) => {
   return houses.map(h => `Hello guys from ${h.address.street.title}`);
};