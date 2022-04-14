import {UsersType} from './08-associative-array';


let users: UsersType;

beforeEach(() => {

    users = {
        '101': {id: 101, name: 'Dima'},
        '101100': {id: 101100, name: 'Katya'},
        '15': {id: 15, name: 'Ilya'},
        '230': {id: 230, name: 'Petr'}
    }

})

test('should update user from obj', () => {

    const newObj = {id: 1900, name: 'Dima'};
    users[newObj.id] = newObj

    expect(users[101100].name).toBe('Katya');
    expect(users[1900]).toEqual({id: 1900, name: 'Dima'});

    users['101100']['name'] = 'Masha';

    expect(users[101100].name).toBe('Masha');

    users['230'] = {id: 230, name: 'Ivaaan'};

    expect(users['230'].name).toBe('Ivaaan');

})

test('should delete user from obj', () => {

    delete users[101100];

    expect(Object.keys(users).length).toBe(3);
    expect(users[101100]).toBeUndefined();

})