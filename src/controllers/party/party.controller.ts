import { Controller, Get, Param, Post, Body, Patch, Delete } from '@nestjs/common';
import { PartyService } from 'src/services/party/party.service';
import { Party } from 'src/entities/party/party.entity';
import { IPartyDTO } from 'src/interfaces/partry.dto';

@Controller('api/party')
export class PartyController {
    constructor(private readonly partyService:PartyService){}

    @Get('findpartyall')
    findPartyAll():Promise<Party[]>{
        return this.partyService.findPartyAll().then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

    @Get('getmanyparty')
    getManyParty(){
        return this.partyService.getManyParty();
    }
    
    @Get('findpartyone/:partyID')
    findPartyOne(@Param('partyID') partyID:string):Promise<Party>{
        return this.partyService.findPartyOne(partyID).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }


    @Post('insertparty')
    insertParty(@Body() partyDTO:IPartyDTO):Promise<Party>{
        return this.partyService.insertParty(partyDTO).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

    @Patch('updateparty/:partyID')
    updateParty(@Param('partyID') partyID:string, @Body() partyDTO:IPartyDTO):Promise<Party>{
        return this.partyService.updateParty(partyID,partyDTO).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }

    @Delete('deleteparty/:partyID')
    deleteParty(@Param('partyID') partyID:string):Promise<Party>{
        return this.partyService.deleteParty(partyID).then(data => {
            return data;
        })
        .catch(err =>{
            return err.message;
        });
    }


}
