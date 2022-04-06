export type ManType = {
    name: string
    age: number
}

const people: Array<ManType> = [
    {name: 'Andrei Ivanov', age: 33},
    {name: 'Alex Petrov', age: 24},
    {name: 'Dmitriy Sidorov', age: 18}
]

const devs = people.map((man) => {
    return {
        stack: ['css', 'html', 'js', 'react'],
        firstName: man.name.split(' ')[0],
        lastName: man.name.split(' ')[1]
    }
})


const messages = people.map((man) => `Hello ${man.name.split(' ')[0]}`);



export const createGreetingMessages = (arr: Array <ManType>) => {
    return arr.map((man: ManType) => `Hello ${man.name.split(' ')[0]}`);
}