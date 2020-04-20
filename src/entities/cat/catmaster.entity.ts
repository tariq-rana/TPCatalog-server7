import { Entity, PrimaryColumn, Column } from "typeorm";


@Entity("CatMaster")
export class CatMaster{
    @PrimaryColumn({name:'CatID'})
    catID:string;
    
    @Column({name:'PartyID'})
    partyID:string;

    @Column({name:'CatDate',type:"datetime"})
    catDate:Date;
    
    @Column({name:'PriceList'})
    priceList:string;

    @Column({name:'GLmeRt'})
    gLmeRt: number;
    
    @Column({name:'PLmeRt'})
    pLmeRt:number;
    
    @Column({name:'SLmeRt'})
    sLmeRt:number;
    
    @Column({name:'LLmeRt'})
    lLmeRt:number;
    
    //Computed
    @Column({name:'CatTypeID', insert:false,update:false})
    catTypeID?:string;

    @Column({name:'Remarks'})
	remarks:string;
}

