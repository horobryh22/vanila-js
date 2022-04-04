export type CityType = {
    title: string
    houses: Array<HouseType>
    governmentBuildings: Array<GBType>
    citizenNumber: number
}

export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: AddressType
}

export type AddressType = {
    number?: number
    street: StreetType
}

export type StreetType = {
    title: string
}

export type GBType = {
    type: 'HOSPITAL' | 'FIRE-STATION'
    budget: number
    staffCount: number
    address: AddressType
}