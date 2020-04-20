import { Controller, Get, Post, Param,Body } from '@nestjs/common';

import { IParam } from 'src/interfaces/dm.interface'
import { DmService } from 'src/services/dm/dm.service';

@Controller('api/dm')
export class DmController {
    constructor(private dmService:DmService){}
    
    @Get()
    findAll(){
        return 'Hello form DM';
    }

    @Get('pgetcustlist')
    pGetCustList(){
        return this.dmService.pGetCustList();
    }

    @Get('pgetcountryinfolist')
    pGetCountryInfoList(){
        return this.dmService.pGetCountryInfoList();
    }

    @Get('pgetcurinfolist')
    pGetCurInfoList(){
        return this.dmService.pGetCurInfoList();
    }

    @Get('pgetyesno')
    pGetYesNo(){
        return this.dmService.pGetYesNo();
    }

    @Get('pgetpartytypeinfolist')
    pGetPartyTypeInfoList(){
        return this.dmService.pGetPartyTypeInfoList();
    }

    @Get('pgetaddtypeinfolist')
    pGetAddTypeInfoList(){
        return this.dmService.pGetAddTypeInfoList();
    }
    
    @Get('pgetrmktlist')
    pGetRmKtList(){
        return this.dmService.pGetRmKtList();
    }

    @Get('pgetdmkttolist')
    pGetDmKtToList(){
        return this.dmService.pGetDmKtToList();
    }

    @Get('fsgettermid')
    fsGetTermID(){
        return this.dmService.fsGetTermID();
    }

    @Post('pgetparamlist')
    pGetParamList(@Body() para:IParam ){
        return this.dmService.pGetParamList(para);
    }


    @Post('pgetrmintqlylist')
    pGetRmIntQlyList(@Body('paramliststr') paramliststr:string ){
        return this.dmService.pGetRmIntQlyList(paramliststr);
    }

    @Get('pgetpartyinfo/:partyId')
    pGetPartyInfo(@Param('partyId') partyId:string){
        return this.dmService.pGetPartyInfo(partyId);
    }

    @Get('pgetdmcdinfo/:dmcd')
    pGetDmCdInfo(@Param('dmcd') dmcd:string){
        return this.dmService.pGetDmCdInfo(dmcd);
    }

    @Get('fsgetnewcatid/:catTypeId/:partyId')
    fsGetNewCatID(@Param('catTypeId') catTypeId:string, @Param('partyId') partyId:string=''){
        return this.dmService.fsGetNewCatID(catTypeId,partyId);
    }
    
    @Get('fsgetnewdefaultcatid/:catTypeId')
    fsGetNewDefaultCatID(@Param('catTypeId') catTypeId:string){
        return this.dmService.fsGetNewCatID(catTypeId,'');
    }

    
    @Get('fsgetnewcatdid/:catTypeId')
    fsGetNewCatDID(@Param('catTypeId') catTypeId:string){
        return this.dmService.fsGetNewCatDID(catTypeId);
    }

    @Get('fsgetnewpartyid')
    fsGetNewPartyID(){
        return this.dmService.fsGetNewPartyID();
    }

    @Post('pgetshowcatalog')
    pGetShowCatalog(@Body() paramList:any ){
        return this.dmService.pGetShowCatalog(paramList);
    }
    
    @Get('pgetpartyinfolist')
    pGetPartyInfoList(){
        return this.dmService.pGetPartyInfoList();
    }

    @Get('pgetpartycatinfo/:partyID')
    pGetPartyCatInfo(@Param('partyID') partyID:string){
        return this.dmService.pGetPartyCatInfo(partyID);
    }

    @Get('pgetdsgbreakupsum/:breakupType/:dmCd/:dmKtTo/:isChain')
    pGetDsgBreakupSum(@Param('breakupType') breakupType:string, @Param('dmCd') dmCd:string, @Param('dmKtTo') dmKtTo:string, @Param('isChain') isChain:boolean){
        return this.dmService.pGetDsgBreakupSum(breakupType,dmCd,dmKtTo,isChain);
    }

    @Get('pgetdsgbreakupmetal/:paramListStr')
    pGetDsgBreakupMetal(@Param('paramListStr') paramListStr:string){
        return this.dmService.pGetDsgBreakupMetal(paramListStr);
    }

    @Get('pgetdsgbreakupstone/:rmCtg/:paramListStr')
    pGetDsgBreakupStone(@Param('rmCtg') rmCtg:string, @Param('paramListStr') paramListStr:string){
        return this.dmService.pGetDsgBreakupStone(rmCtg,paramListStr);
    }
    
    @Get('pgetdsgbreakupfind/:paramListStr')
    pGetDsgBreakupFind(paramListStr:string){
        return this.dmService.pGetDsgBreakupFind(paramListStr);
    }

    @Get('hcatmasterbycatid/:catID')
    hCatMasterByCatID(@Param('catID') catID:string){
      return this.dmService.hCatMasterByCatID(catID);
    }

    @Get('hcatdetailbycatid/:catID')
    hCatDetailByCatID(@Param('catID') catID:string){
      return this.dmService.hCatDetailByCatID(catID);
    }

}


