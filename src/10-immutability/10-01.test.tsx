import {makeHairStyle, moveUser, upgradeUserLaptop, UserType10, UserWithLaptopType} from './10-01';



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

    const richUser = upgradeUserLaptop(user, 'MacBook');

    expect(richUser).not.toBe(user);
    expect(richUser.address).toEqual(user.address);
    expect(richUser.laptop).not.toBe(user.laptop);
    expect(richUser.laptop.title).toBe('MacBook');
    expect(user.laptop.title).toBe('Asus');
})