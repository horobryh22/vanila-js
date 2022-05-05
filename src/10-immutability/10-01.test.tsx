import {
    addNewBooksToUser, addNewCompany,
    makeHairStyle,
    moveUser, removeBook, updateBook, UpdateCompany, UpdateCompanyTitle,
    upgradeUserLaptop,
    UserType10,
    UserWithBooksType,
    UserWithLaptopType, WithCompaniesType
} from './10-01';


test('reference type test', () => {
    let user: UserType10 = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        }
    }

    const cutUser = makeHairStyle(user, 2);

    expect(user.hair).toBe(32)
    expect(cutUser.hair).toBe(16)
    expect(cutUser.address).toBe(user.address)
})

test('change address', () => {
    let user: UserWithLaptopType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        }
    }

    const movedUser = moveUser(user, 'Kiev');

    expect(movedUser).not.toBe(user);
    expect(movedUser.address).not.toBe(user.address);
    expect(movedUser.address.title).toBe('Kiev');
    expect(movedUser.laptop).toEqual(user.laptop);
})

test('upgrade laptop to MacBook', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        },
        books: []
    }

    const richUser = upgradeUserLaptop(user, 'MacBook');

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).not.toBe(user.laptop);
    expect(richUser.laptop.title).toBe('MacBook');
    expect(user.laptop.title).toBe('Asus');
})

test('add new Books to user', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'react', 'js']
    }

    const richUser = addNewBooksToUser(user, ['ts', 'rest API']);

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).toEqual(user.laptop);
    expect(richUser.books).not.toBe(user.books);
    expect(richUser.books.length).toBe(6);
    expect(richUser.books[5]).toBe('rest API');
})

test('update js to ts', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'react', 'js']
    }

    const richUser = updateBook(user, 'js', 'ts');

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).toEqual(user.laptop);
    expect(richUser.books).not.toBe(user.books);
    expect(richUser.books[3]).toBe('ts');
    expect(user.books[3]).toBe('js');
})

test('remove js book', () => {
    let user: UserWithLaptopType & UserWithBooksType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'react', 'js']
    }

    const richUser = removeBook(user, 'js');

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).toEqual(user.laptop);
    expect(richUser.books).not.toBe(user.books);
    expect(richUser.books[2]).toBe('react');
    expect(user.books.length).toBe(4);
    expect(richUser.books.length).toBe(3);
})

test('add new company to person', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'react', 'js'],
        companies: [{id: 1, title: 'Epam'}, {id: 2, title: 'Incubator'}]
    }

    const richUser = addNewCompany(user, 'Google');

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).toEqual(user.laptop);
    expect(richUser.books).toEqual(user.books);
    expect(richUser.companies).not.toEqual(user.companies);
    expect(richUser.companies.length).toBe(3);
    expect(user.companies.length).toBe(2);

})

test('update company', () => {
    let user: UserWithLaptopType & UserWithBooksType & WithCompaniesType = {
        name: 'Dimych',
        hair: 32,
        address: {
            title: 'Minsk'
        },
        laptop: {
            title: 'Asus'
        },
        books: ['css', 'html', 'react', 'js'],
        companies: [{id: 1, title: 'Ипам'}, {id: 2, title: 'Incubator'}]
    }

    const richUser = UpdateCompany(user, 1, 'Epam') as UserWithLaptopType & UserWithBooksType & WithCompaniesType;

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).toEqual(user.laptop);
    expect(richUser.books).toEqual(user.books);
    expect(richUser.companies).not.toEqual(user.companies);
    expect(richUser.companies[0].title).toBe('Epam');
    expect(user.companies[0].title).toBe('Ипам');
    expect(richUser.companies[0]).not.toEqual(user.companies[0]);


})

test('update company again', () => {

    const companies = {
        'Dimych': [{id: 1, title: 'Ипам'}, {id: 2, title: 'Incubator'}],
        'Artem': [{id: 1, title: 'Incubator'}]
    }

    const updatesCompany = UpdateCompanyTitle(companies, 'Dimych', 1, 'Google');

    expect(companies).not.toEqual(updatesCompany);
    expect(companies['Dimych']).not.toEqual(updatesCompany['Dimych']);
    expect(companies['Artem']).toEqual(updatesCompany['Artem']);
    expect(companies['Dimych'][0].title).toBe('Ипам');
    expect(updatesCompany['Dimych'][0].title).toBe('Google');

})