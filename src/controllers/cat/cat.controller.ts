import { Controller, Get, Post, Param, Body, Delete, Patch } from '@nestjs/common';
import { CatService } from 'src/services/cat/cat.service';
import { CatMaster } from 'src/entities/cat/catmaster.entity';
import { ICatMasterDTO, ICatDetailDTO } from 'src/interfaces/cat.dto';
import { CatDetail } from 'src/entities/cat/catdetail.entity';

@Controller('api/cat')
export class CatController {
    constructor(private catService:CatService){}

    @Get('findcatmasterall')
    findCatMasterAll():Promise<CatMaster[]>{
        return this.catService.findCatMasterAll().then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

    @Get('findcatmasterone/:catID')
    findCatMasterOne(@Param('catID') catID:string):Promise<CatMaster>{
        return this.catService.findCatMasterOne(catID).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

   
    @Post('insertcatmaster')
    insertCatMaster(@Body() catMaster:CatMaster):Promise<CatMaster>{
        return this.catService.insertCatMaster(catMaster).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })
    }
   
    @Patch('updatecatmaster/:catID')
    updateCatMaster(@Param('catID') catID:string, @Body() catMasterDTO:Partial<ICatMasterDTO>):Promise<CatMaster>{
        return this.catService.updateCatMaster(catID,catMasterDTO).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })
    }

    @Patch('updatenewcatmaster/:catID/:partyID')
    updateNewCatMaster(@Param('catID') catID:string, @Param('partyID') partyID:string):Promise<CatMaster>{
        return this.catService.updateNewCatMaster(catID, partyID).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })    
    }

    @Delete('deletecatmaster/:catID')
    deleteCatMaster(@Param('catID') catID:string):Promise<CatMaster>{
        return this.catService.deleteCatMaster(catID).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })
    }

    @Get('findcatdetailall')
    findCatDetailAll():Promise<CatDetail[]>{
        return this.catService.findCatDetailAll().then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

    @Get('findcatdetailone/:catIDD')
    findCatDetailOne(@Param('catIDD') catIDD:string):Promise<CatDetail>{
        return this.catService.findCatDetailOne(catIDD).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

    @Get('findcatdetailbycatid/:catID')
    findCatDetailByCatID(@Param('catID') catID:string):Promise<CatDetail>{
        return this.catService.findCatDetailByCatID(catID).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });

    }


    @Post('insertcatdetail')
    insertCatDetail(@Body() catDetail:CatDetail):Promise<CatDetail>{
        return this.catService.insertCatDetail(catDetail).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })
    }

    @Patch('updatecatdetail/:catIDD')
    updateCatDetail(@Param('catIDD') catIDD:string, @Body() catDetailDTO:Partial<ICatDetailDTO>):Promise<CatDetail>{
        return this.catService.updateCatDetail(catIDD,catDetailDTO).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })
    }

    @Delete('deletecatdetail/:catIDD')
    deleteCatDetail(@Param('catIDD') catIDD:string):Promise<CatDetail>{
        return this.catService.deleteCatDetail(catIDD).then(data=> {
            return data;
        })
        .catch(err =>{
            return err.message;
        })
    }    
}
