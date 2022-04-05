import {addSkill, doesStudentLive, makeStudentActive} from './03';
import {StudentType} from '../02 - object/02-object';

let student: StudentType;

beforeEach(() => {
    student = {
        name: 'Ilya',
        age: 27,
        isActive: false,
        address: {
            city: {
                title: 'Omsk',
                country: 'Russia'
            },
            streetTitle: 'Mishina 2'
        },
        technologies: [
            {
                id: 1,
                title: 'HTML'
            },
            {
                id: 2,
                title: 'CSS'
            },
            {
                id: 3,
                title: 'JS'
            }
        ]
    };
})

test('new tech skill should be added to student', () => {

    addSkill(student, 'React');
    addSkill(student, 'Redux');

    expect(student.technologies.length).toBe(5);
    expect(student.technologies[4].title).toBe('Redux');
    expect(student.technologies[4].id).toBeDefined(); // проверяем, что id у нашего нового объекта есть впринципе

})


test('student should become active', () => {
    expect(student.isActive).toBe(false);

    makeStudentActive(student);

    expect(student.isActive).toBe(true);
})


test('does student live in city?', () => {

    const result1 = doesStudentLive(student, 'Omsk');
    const result2 = doesStudentLive(student, 'Moscow');

    expect(result1).toBe(true);
    expect(result2).toBe(false);
})