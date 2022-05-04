export type UserType10 = {
    name: string
    hair: number
    address: {title: string}
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType10 & {
    laptop: LaptopType
}

export function makeHairStyle(u: UserType10, power: number) {
    const userCopy = {...u, hair: u.hair / power, address: {...u.address}};

    return userCopy;
}

export function moveUser(u: UserWithLaptopType, city: string) {
    const userCopy: UserWithLaptopType = {
        ...u,
        address: {...u.address, title: city}
    };

    return userCopy;
}

export function upgradeUserLaptop(u: UserWithLaptopType, laptopTitle: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptopTitle}
    }
}
