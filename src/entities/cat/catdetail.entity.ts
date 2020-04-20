import { Entity, PrimaryColumn, Column } from "typeorm";

@Entity("CatDetail")
export class CatDetail{
    @PrimaryColumn({name:"CatIDD"})
    catIDD:string;

    @Column({name:"CatID"})
    catID:string;

    @Column({name:"DmCd"})
    dmCd: string;
    
    @Column({name:"DmKt"})
    dmKt: string;
    
    @Column({name:"DmCol"})
    dmCol: string;
	
    @Column({name:"DiaIntQly"})
    diaIntQly: string;
	
    @Column({name:"ColName"})
    colName: string;
	
    @Column({name:"Rate"})
    rate: number;
    
    @Column({name:"IsChain"})
    isChain: boolean;
}