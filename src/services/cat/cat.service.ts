import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { DmService } from '../dm/dm.service';
import { CatMaster } from 'src/entities/cat/catmaster.entity';
import { CatDetail } from 'src/entities/cat/catdetail.entity';
import { ICatMasterDTO, ICatDetailDTO } from 'src/interfaces/cat.dto';


@Injectable()
export class CatService {
    constructor(private readonly dmService: DmService,
        @InjectRepository(CatMaster) private readonly catMasterRepository: Repository<CatMaster>,
        @InjectRepository(CatDetail) private readonly catDetailRepository: Repository<CatDetail>) { }

    async findCatMasterAll(): Promise<CatMaster[]> {
        return await this.catMasterRepository.find();
    }

    async findCatMasterOne(catID: string): Promise<CatMaster> {
        return await this.catMasterRepository.findOne(catID);
    }

    
    async insertCatMaster(catMaster: CatMaster): Promise<CatMaster> {
        let termID = await this.dmService.fsGetTermID().then(data => data[0]['TermID']);
        let catID = await this.dmService.fsGetNewCatID('CT', '').then(data => data[0]['NewCatID']);
        
        let partyID = termID + '-C0000';

        catMaster.catID = catID;
        catMaster.partyID = partyID;
        catMaster.catDate = new Date();

        let newCatMaster = this.catMasterRepository.create(catMaster);

        return await this.catMasterRepository.save(newCatMaster);
    }

    async updateCatMaster(catID: string, catMasterDTO: Partial<ICatMasterDTO>): Promise<CatMaster> {
        let {partyID, ...chkCatMasterDTO } = catMasterDTO;
        let oldCatMaster = await this.catMasterRepository.findOne(catID);
        let newCatMaster = { ...oldCatMaster, ...chkCatMasterDTO };
       
        return await this.catMasterRepository.save(newCatMaster).then(() => {
            return newCatMaster
        });
    }

    async updateNewCatMaster(catID:string, partyID:string){
        let newCatID = await this.dmService.fsGetNewCatID('CT', partyID).then(data => data[0]['NewCatID']);

        return await this.catMasterRepository.update(catID,{catID:newCatID,partyID}).then(async ()=>{
            return await this.findCatMasterOne(newCatID);
        })
        
    }

    async deleteCatMaster(catID: string): Promise<CatMaster> {
        let oldCatMaster = await this.catMasterRepository.findOne(catID);
        return await this.catMasterRepository.delete(catID).then(() => oldCatMaster);
    }


    async findCatDetailAll(): Promise<CatDetail[]> {
        return await this.catDetailRepository.find();
    }

    async findCatDetailOne(catIDD: string): Promise<CatDetail> {
        return await this.catDetailRepository.findOne(catIDD);
    }

    async findCatDetailByCatID(catID: string): Promise<CatDetail[]> {
        return await this.catDetailRepository.find({where:{catID:catID}});
    }



    async insertCatDetail(catDetail: CatDetail): Promise<CatDetail> {
        catDetail.catIDD = await this.dmService.fsGetNewCatDID(catDetail.catID).then(data => data[0]['NewCatIDD']);
        let newCatDetail = this.catDetailRepository.create(catDetail);

        return await this.catDetailRepository.save(newCatDetail);
    }

    async updateCatDetail(catIDD: string, catDetailDTO: Partial<ICatDetailDTO>): Promise<CatDetail> {
        let {catID, ...chkCatDetailDTO} = catDetailDTO;
        let oldCatDetail = await this.catDetailRepository.findOne(catIDD);
        let newCatDetail = { ...oldCatDetail, ...chkCatDetailDTO};

        return await this.catMasterRepository.save(newCatDetail).then(() => {
            return newCatDetail
        });
    }

    async deleteCatDetail(catIDD: string): Promise<CatDetail> {
        let oldCatDetail = await this.catDetailRepository.findOne(catIDD);
        return await this.catDetailRepository.delete(catIDD).then(() => oldCatDetail);
    }
}
