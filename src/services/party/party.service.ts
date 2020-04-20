import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Party } from 'src/entities/party/party.entity';
import { IPartyDTO } from 'src/interfaces/partry.dto';
import { DmService } from '../dm/dm.service';

@Injectable()
export class PartyService {
    constructor(@InjectRepository(Party) private readonly partyRepository:Repository<Party>,
                private readonly dmService:DmService){}

    async findPartyAll():Promise<Party[]>{
        return await this.partyRepository.find();
    }

    async findPartyOne(partyID:string):Promise<Party> {
        return await this.partyRepository.findOne(partyID);
    }

    async getManyParty():Promise<Party[]>{
        return await this.partyRepository
            .createQueryBuilder('party')
            .getMany();
    }

    async insertParty(partyDTO:IPartyDTO):Promise<Party>{
        let  newPartyID;
    
        newPartyID = await this.dmService.fsGetNewPartyID().then(data => data[0]['NewPartyID']);
        partyDTO.partyID = newPartyID;
    
        return   await this.partyRepository.save(partyDTO);

         
    }


    async updateParty(partyID:string, partyDTO:IPartyDTO):Promise<Party>{
        return await this.partyRepository.update(partyID,partyDTO).then(async () =>{
            return await this.findPartyOne(partyID);
        });
    }

    async deleteParty(partyID:string):Promise<Party> {
        let oldParty = await this.findPartyOne(partyID);

        return await this.partyRepository.delete(partyID).then(()=>{
            return oldParty;
        });
    }

    

}
