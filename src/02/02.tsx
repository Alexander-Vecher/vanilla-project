import {StydentType} from "./02_02";

export const student: StydentType = {
    id: 1,
    name: "Ivan",
    age: 23,
    isActive: false,
    address: {
        streetTitle: "Surganova 2",
        city: {
            title: "Minsk",
            countryTitle: "Belarus"
        }
    },
    technologies: [
        {
            id: 1,
            title: "HTML"
        },
        {
            id: 2,
            title: "CSS"
        },
        {
            id: 3,
            title: "React"
        }
    ]
}

console.log(student.name)
console.log(student.age)
console.log(student.address.city.countryTitle)
console.log(student.address.city.title)
console.log(student.address.streetTitle)
console.log(student.technologies[1].title)
