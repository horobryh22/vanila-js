import {multiply, splitIntoWords, sum} from './01';

let a: number;
let b: number;
let c: number;

beforeEach(() => {
    a = 1;
    b = 2;
    c = 3;
})

test('sum should be correct', () => {

    // data - наши подготовительные данные

    // action - действия, которые мы выполняем
    const result1 = sum(a, b);
    const result2 = sum(b, c);

    // expect result  - результат, который мы ожидаем получить
    expect(result1).toBe(3);
    expect(result2).toBe(5);

})

test('multiply should be correct', () => {

    // data - наши подготовительные данные

    // action - действия, которые мы выполняем
    const result1 = multiply(a, b);
    const result2 = multiply(b, c);

    // expect result  - результат, который мы ожидаем получить
    expect(result1).toBe(2);
    expect(result2).toBe(6);

})

test('splitting into words should be correct', () => {

    let sentence1 = 'Hello   my     world.';
    let sentence2 = 'Hi,    my    name is   Ilya.';

    const result1 = splitIntoWords(sentence1);
    const result2 = splitIntoWords(sentence2);

    expect(result1.length).toBe(3);
    expect(result2.length).toBe(5);
    expect(result1[2]).toBe('world');
    expect(result2[0]).toBe('hi');

})