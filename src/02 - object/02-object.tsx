
type StudentType = {
    name: string
    age: number
    isActive: boolean
    address: LocalAddressType
    technologies: Array<TechType>
}
type LocalAddressType = {
    city: LocalCityType
    streetTitle: string
}
type LocalCityType = {
    title: string
    country: string
}
type TechType = {
    id: number
    title: string
}


const student: StudentType = {
    name: 'Ilya',
    age: 27,
    isActive: true,
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
}

console.log(student.age);
console.log(student.name);
console.log(student.address.city.country);
console.log(student.technologies[2].title);