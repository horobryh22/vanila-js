import {ManType} from './Destructuring';


let props: ManType;

beforeEach(() => {
    props = {
        name: 'Dimych',
        age: 32,
        lessons: [{title: '1'}, {title: '2', name: 'Ilya'}, {title: '3'}, {title: '4'}, {title: '5'}, {title: '6'},],
        address: {
            street: {
                title: 'Omskaya'
            }
        }
    }
})

test('destructuring', () => {

    const {age: a, lessons: l, address: {street: {title: t}}} = props;
    const [l1, l2, ...restProps] = props.lessons;
    const [, , , , , l6] = props.lessons;

    expect(a).toBe(32);
    expect(t).toBe('Omskaya');
    expect(l.length).toBe(6);
    expect(l1.title).toBe('1');
    expect(l2.title).toBe('2');
    expect(l6.title).toBe('6');
    expect(restProps.length).toBe(4);
    expect(l2).toStrictEqual({name: 'Ilya', title: '2'}); // проверяем конкретно объект и свойств в нем
})
