type UserType = {
    name: string
    age: number
    address: { title: string }
}

const increaseAge = (u: UserType) => {
    u.age++;
}

test('reference type test', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    increaseAge(user);

    expect(user.age).toBe(33);

    const superMan = user;

    superMan.age = 1000;

    expect(user.age).toBe(1000);
    expect(user).toEqual({name: 'Dimych', age: 1000});
    expect(superMan).toEqual({name: 'Dimych', age: 1000});
});

test('array reference test', () => {

    const users = [
        {
            name: 'Ilya',
            age: 28,
            address: {
                title: 'Omsk'
            }
        },
        {
            name: 'Dimych',
            age: 33,
            address: {
                title: 'Minsk'
            }
        }];

    const admins = users;

    admins.push({
        name: 'Vikrot',
        age: 50,
        address: {
            title: 'Minsk'
        }
    });

    expect(users.length).toBe(3);
    expect(admins.length).toBe(3);
    expect(users[2]).toEqual({name: 'Vikrot', age: 50});
})

test('value reference test', () => {

    let usersCount = 100;

    let adminsCount = usersCount;

    adminsCount = 200;

    expect(usersCount).toBe(100);
    expect(adminsCount).toBe(200)

})

test('reference type test 2', () => {

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    let address = user.address;

   const user2: UserType = {
       name: 'Ilya',
       age: 30,
       address: address
   }

   user2.address.title = 'Kanary';

   expect(user.address.title).toBe('Kanary');
});

test('reference type array test 2', () => {

    const address = {
        title: 'Minsk'
    }

    const user: UserType = {
        name: 'Dimych',
        age: 32,
        address: {
            title: 'Minsk'
        }
    }

    const user2: UserType = {
        name: 'Ilya',
        age: 30,
        address: address
    }

    const users = [user, user2, {name: 'Katya', age: 18, address: address}];

    const usersCopy = [...users, {...users[2]}];



    expect(users[0] === usersCopy[0]).toBe(true);
    expect(users[1] === usersCopy[1]).toBe(true);
    expect(users[2] === usersCopy[2]).toBe(true);
    expect(usersCopy[3]).toEqual({name: 'Katya', age: 18, address: address});
    expect(usersCopy[3] === users[2]).toBe(false);
    expect(usersCopy[3].address === users[2].address).toBe(true);

    usersCopy[2].age = 20;
    expect(users[2].age).toBe(20);
    expect(usersCopy[3].age).toBe(18);
});



test('copy array', () => {

    const array = [1,2,3,4,5];

    const newArray = array.map(n => n);

    expect(newArray.length === array.length).toBe(true);
    expect(newArray[2]).toBe(3);
});