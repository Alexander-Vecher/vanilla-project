import {GoverType, StudentType} from "../02/02_02";


export const addSkill=(student:StudentType, skill:string)=>{
student.technologies.push({
    id: new Date().getTime(),
    title:skill}
)
}

export function makeStudentActive(st:StudentType) {
    st.isActive=true;
}

export const changeStudentLive=(st:StudentType, cityName:string)=>{
  return st.address.city.title===cityName
}

export const changeBudget=(building:GoverType, money:number)=>{
    return building.budget+=money;

}
export const repairHouse=(building:GoverType, money:number)=>{
    return building.budget+=money;

}
export const toFireStaff=(building:GoverType, money:number)=>{
    return building.budget+=money;

}
export const toHireStaff=(building:GoverType, money:number)=>{
    return building.budget+=money;

}