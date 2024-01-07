import * as string_decoder from "string_decoder";

export type StydentType={
    id:number
    name:string
    age:number
    isActive: boolean
    address: AddressType2
    technologies: TechnoType[]
}

export type AddressType2= {
    streetTitle: string
    city: CityType2
}

export type TechnoType= {
    id: number
    title: string
}

export type CityType2={
    title:string
    countryTitle:string
    }

export type StreetType={
    title:string
}

    export type AddressType={
    number?:number
        street:StreetType
}

export type HouseType={
    buildedAt:number
    repaired:false
    address:AddressType
}
export type GoverType={
    type:"HOSPITAL"| "FIRE-STATION"
        budget:number
        staffCount:number
        address:AddressType

}
export type CityType={
    title:string
    houses:Array<HouseType>;
    governmentBuildings:Array<GoverType>;
    citizensNumber:number
}