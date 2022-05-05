export type UserType10 = {
    name: string
    hair: number
    address: { title: string }
}

export type LaptopType = {
    title: string
}

export type UserWithLaptopType = UserType10 & {
    laptop: LaptopType
}

export type UserWithBooksType = UserType10 & {
    books: Array<string>
}

export type WithCompaniesType = {
    companies: Array<{ id: number, title: string }>
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

export function upgradeUserLaptop(u: UserWithLaptopType & UserWithBooksType, laptopTitle: string) {
    return {
        ...u,
        laptop: {...u.laptop, title: laptopTitle}
    }
}

export function addNewBooksToUser(u: UserWithLaptopType & UserWithBooksType, newBooks: Array<string>) {
    return {
        ...u,
        books: [...u.books, ...newBooks]
    }
}


export function updateBook(u: UserWithLaptopType & UserWithBooksType, book: string, newBook: string) {
    return {
        ...u,
        books: u.books.map(b => b === book ? newBook : b)
    }
}

export function removeBook(u: UserWithLaptopType & UserWithBooksType, book: string) {
    return {
        ...u,
        books: u.books.filter(b => b !== book)
    }
}

export function addNewCompany(u: UserWithLaptopType & UserWithBooksType & WithCompaniesType, companyTitle: string) {

    return {
        ...u,
        companies: [...u.companies, {id: 3, title: companyTitle}]
    }

}


export function UpdateCompany(u: WithCompaniesType, id: number, title: string) {

    return {
        ...u,
        companies: u.companies.map(c => c.id === id ? {...c, title} : c)
    }

}

export type CompanyType = {
    [key: string]: Array<{ id: number, title: string }>
}

export function UpdateCompanyTitle(company: CompanyType, userName: string, companyId: number, newTitle: string) {

    return {
        ...company,
        [userName]: company[userName].map(c => c.id === companyId ? {...c, title: newTitle} : c)
    }

}