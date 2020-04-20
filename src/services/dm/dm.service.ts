import { Injectable } from '@nestjs/common';
import { InjectConnection } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { Observable } from 'rxjs';
import { IParam } from 'src/interfaces/dm.interface';

@Injectable()
export class DmService {
    constructor(@InjectConnection() private readonly tpCatalog: Connection) { }

    async pGetCustList(): Promise<any> {
        const query = 'EXEC pGetCustList';
        return await this.tpCatalog.query(query);
    }

    async pGetCountryInfoList(): Promise<any> {
        const query = 'EXEC pGetCountryInfoList';
        return await this.tpCatalog.query(query);
    }

    async pGetCurInfoList(): Promise<any> {
        const query = 'EXEC pGetCurInfoList';
        return await this.tpCatalog.query(query);
    }

    async pGetYesNo(): Promise<any> {
        const query = 'EXEC pGetYesNo';
        return await this.tpCatalog.query(query);
    }

    async pGetPartyTypeInfoList(): Promise<any> {
        const query = 'EXEC pGetPartyTypeInfoList';
        return await this.tpCatalog.query(query);
    }

    async pGetAddTypeInfoList(): Promise<any> {
        const query = 'EXEC pGetAddTypeInfoList';
        return await this.tpCatalog.query(query);
    }

    async pGetRmKtList(): Promise<any> {
        const query = "EXEC pGetParamList 'KT','%','%'";
        return await this.tpCatalog.query(query);
    }

    async pGetDmKtToList(): Promise<any> {
        const query = 'EXEC pGetDmKtToList';
        return await this.tpCatalog.query(query);
    }

    async fsGetTermID(): Promise<any> {
        const query = 'Select TermID=dbo.fsGetTermID()';
        return await this.tpCatalog.query(query);
    }

    async pGetParamList(para: IParam): Promise<any> {
        const query = `EXEC pGetParamList '${para.ptyp}','${para.pmcd}','${para.pscd}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetRmIntQlyList(paramliststr: string): Promise<any> {
        const query = `EXEC pGetRmIntQlyList '${paramliststr}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetPartyInfo(partyId: string): Promise<any> {
        const query = `EXEC pGetPartyInfo '${partyId}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetDmCdInfo(dmcd: string): Promise<any> {
        const query = `EXEC pGetDmCdInfo '${dmcd}'`;
        return await this.tpCatalog.query(query);
    }

    async fsGetNewCatID(catTypeId: string, partyId: string): Promise<any> {
        const query = `Select NewCatID=dbo.fsGetNewCatID('${catTypeId}','${partyId}')`;
        return await this.tpCatalog.query(query);
    }

    async fsGetNewCatDID(catTypeId: string): Promise<any> {
        const query = `Select NewCatIDD=dbo.fsGetNewCatIDD('${catTypeId}')`;
        return await this.tpCatalog.query(query);
    }

    async fsGetNewPartyID(): Promise<any> {
        const query = `Select NewPartyID=dbo.fsGetNewPartyID()`;
        return await this.tpCatalog.query(query);
    }

    async pGetShowCatalog(paramList): Promise<any> {
        //paramListStr = 'DMCD,DmCd,%,CMCd,CMCD,%,DMCTG,DmCtg,%,SALCTG,DmSalCtg,%,RMSTG,D,%,RMSTG,C,%,RANGE,DIAWT,%,RANGE,DIAPTR,%,RANGE,COLSZ,%,RANGE,GRSWT,%,RANGE,DATE,%';
        const paramListStr = paramList['paramListStr'];
        const query = `EXEC pGetShowCatalog '${paramListStr}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetPartyInfoList(): Promise<any> {
        const query = `EXEC pGetPartyInfoList`;
        return await this.tpCatalog.query(query);
    }

    async pGetPartyCatInfo(partyID: string): Promise<any> {
        const query = `EXEC pGetPartyCatInfo '${partyID}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetDsgBreakupSum(breakupType: string, dmCd: string, dmKtTo: string, isChain: boolean) {
        const query = `EXEC pGetDsgBreakupSum '${breakupType}','${dmCd}','${dmKtTo}','${isChain}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetDsgBreakupMetal(paramListStr: string) {
        const query = `EXEC pGetDsgBreakupMetal '${paramListStr}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetDsgBreakupStone(rmCtg: string, paramListStr: string) {
        const query = `EXEC pGetDsgBreakupStone '${rmCtg}','${paramListStr}'`;
        return await this.tpCatalog.query(query);
    }

    async pGetDsgBreakupFind(paramListStr: string) {
        const query = `EXEC pGetDsgBreakupFind '${paramListStr}'`;
        return await this.tpCatalog.query(query);
    }


    async hCatMasterByCatID(catID: string) {
        const query = `
        Select CM.*,P.Company
        from CatMaster CM
        Left Join PartyInfo P ON CM.PartyID = P.PartyID
        Where CatID = '${catID}'`

        return await this.tpCatalog.query(query);
    }

    async hCatDetailByCatID(catID: string) {
        const query = `
                select CD.*, D.DmCtg 
                from CatDetail CD 
                Left Join DsgMst D  on CD.DmCd = D.DmCd 
                Where CD.CatID = '${catID}'`

        return await this.tpCatalog.query(query);
    }

}
