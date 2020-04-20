import { Entity, PrimaryColumn, Column} from "typeorm";

@Entity("PartyInfo")
export class Party{
    @PrimaryColumn({name:'PartyID'})
    partyID:string;

    @Column({name:'Company'})
    company:string;

    @Column({name:'Title'})
    title:string;

    @Column({name:'FirstName'})
    firstName:string;

    @Column({name:'LastName'})
    lastName:string;

    @Column({name:'PartyTypeID'})
    partyTypeID:string;

    @Column({name:'CurID'})
    curID:string;

    @Column({name:'BizPhone'})
    bizPhone:string;

    @Column({name:'Mobile'})
    mobile:string;

    @Column({name:'Fax'})
    fax:string;

    @Column({name:'Email'})
    email:String;

    @Column({name:'WebSite'})
    webSite:string;

    @Column({name:'Skype'})
    skype:string;

    @Column({name:'AddTypeID'})
    addTypeID:string;

    @Column({name:'Add1'})
    add1:string;

    @Column({name:'Add2'})
    add2:string;

    @Column({name:'Add3'})
    add3:string;

    @Column({name:'City'})
    city:string;

    @Column({name:'State'})
    state:string;

    @Column({name:'Zip'})
    zip:string;

    @Column({name:'CountryID'})
    countryID:string;

    @Column({name:'ProdIns'})
    prodIns:string;

    @Column({name:'RemarksCust'})
    remarksCust:string;

    @Column({name:'Stamp'})
    stamp:string;

    @Column({name:'DeliveryTerms'})
    deliveryTerms:string;

    @Column({name:'PayTerms'})
    payTerms:string;

    @Column({name:'RmKt'})
    rmKt:string;

    @Column({name:'IsStdWt'})
    isStdWt:boolean;

    @Column({name:'IsFixPrice'})
    isFixPrice:boolean;

    @Column({name:'IsActWt'})
    isActWt:boolean;
    @Column("decimal", )

    @Column({ name:'MarkupPCT', type:'decimal' ,precision: 10, scale: 2, default: 0})
    markupPCT:number;

    @Column({name:'DiscountPCT', type:'decimal' ,precision: 10, scale: 2, default: 0})
    discountPCT:number;

    @Column({name:'Remarks'})
    remarks:string;
    
    @Column({name:'TermID', insert:false,update:false})
    termID:string;
    
}