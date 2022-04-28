export const usersArray = ['Dima', 'Katya', 'Ilya', 'Petr'];


export const usersObj = {
    0: 'Dima',
    1: 'Katya',
    2: 'Ilya',
    3: 'Petr'
}

const newObj = {id: 101, name: 'Dima'};

export type UsersType = {
    [key: string]: { id: number, name: string }
}

const users: UsersType = {
    '101': {id: 101, name: 'Dima'},
    '101100': {id: 101100, name: 'Katya'},
    '15': {id: 15, name: 'Ilya'},
    '230': {id: 230, name: 'Petr'}
}

users[newObj.id] = newObj;

console.log(users);