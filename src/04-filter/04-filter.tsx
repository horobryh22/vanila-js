import {CityType, GBType} from '../02 - object/02_02';

export const demolishHousesOnTheStreet = (city: CityType, street: string) => {   // не чистая функция, так как изменяет данные и не возвращает ничего
    city.houses = city.houses.filter(house => house.address.street.title !== street);
}


export const getBuildingWithStaffCountMoreThen = (governmentBuildings: Array<GBType>, staffCount: number) => { // чистая функция
    return governmentBuildings.filter( b => b.staffCount > 500);
}