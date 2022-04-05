test('should take only old men older then 90', () => {
    const ages = [18, 20, 22, 1, 100, 90, 15, 14];

    const oldAges = ages.filter((age) => age > 90);

    expect(oldAges.length).toBe(1);
    expect(oldAges[0]).toBe(100);
})

test('get only completed tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Sugar', isDone: true},
        {id: 4, title: 'Salt', isDone: false},
    ]

    const completedTasks = tasks.filter(task => task.isDone);

    expect(completedTasks.length).toBe(2);
    expect(completedTasks[0].title).toBe('Bread');
    expect(completedTasks[1].title).toBe('Sugar');
})

test('get only uncompleted tasks', () => {
    const tasks = [
        {id: 1, title: 'Bread', isDone: true},
        {id: 2, title: 'Milk', isDone: false},
        {id: 3, title: 'Sugar', isDone: true},
        {id: 4, title: 'Salt', isDone: false},
    ]

    const uncompletedTasks = tasks.filter(task => !task.isDone);

    expect(uncompletedTasks.length).toBe(2);
    expect(uncompletedTasks[0].title).toBe('Milk');
    expect(uncompletedTasks[1].title).toBe('Salt');
})