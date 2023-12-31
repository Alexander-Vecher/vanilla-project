

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