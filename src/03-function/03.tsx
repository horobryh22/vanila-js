import {student, StudentType} from '../02 - object/02-object';
import {GBType, HouseType} from '../02 - object/02_02';


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push(
        {
            id: new Date().getTime(),
            title: skill
        }
    )
}

export const makeStudentActive = (student: StudentType) => {
    student.isActive = true;
}

export const doesStudentLive = (student: StudentType, city: string) => {
    return (student.address.city.title === city);
}


export const addMoneyToBudget =  (government: GBType,  budget: number) => {
    government.budget += budget;
}

export const repairHouse = (house: HouseType) => {
    house.repaired = true;
}

export const toFireStaff = (government: GBType, staffToFire: number) => {
    government.staffCount -= staffToFire;
}

export const toHireStaff = (government: GBType, staffToHire: number) => {
    government.staffCount += staffToHire;
}