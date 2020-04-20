export interface ICatMasterDTO {
    catID?:never;
    partyID?:never;
    catDate:Date;
    priceList:string;
    gLmeRt: number;
    pLmeRt:number;
    sLmeRt:number;
    lLmeRt:number;
    remarks:string;
}

export interface ICatMasterRO {
    catID:string;
    partyID:string;
    catDate:Date;
    priceList:string;
    gLmeRt: number;
    pLmeRt:number;
    sLmeRt:number;
    lLmeRt:number;
    remarks:string;
}

export interface ICatDetailDTO{
    catIDD?:string;
    catID?:string;
    dmCd: string;
    dmKt: string;
    dmCol: string;
    diaIntQly: string;
    colName: string;
    rate: number;
    isChain: boolean;
}

export interface ICatDetailRO{
    catIDD:string;
    catID:string;
    dmCd: string;
    dmKt: string;
    dmCol: string;
    diaIntQly: string;
    colName: string;
    rate: number;
    isChain: boolean;
}