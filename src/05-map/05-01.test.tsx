import {createGreetingMessages, ManType} from './05-01';

let people: ManType[];

beforeEach(() => {

    people = [
        {name: 'Andrei Ivanov', age: 33},
        {name: 'Alex Petrov', age: 24},
        {name: 'Dmitriy Sidorov', age: 18}
    ]
})

test('should get array of greeting messages', () => {
    // @ts-ignore
    const messages = createGreetingMessages(people);

    expect(messages.length).toBe(3);
    expect(messages[0].split(' ')[1]).toBe('Andrei')
    expect(messages[1].split(' ')[1]).toBe('Alex')
    expect(messages[2].split(' ')[1]).toBe('Dmitriy')
})