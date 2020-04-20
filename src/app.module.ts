import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';

import { DmService } from './services/dm/dm.service';
import { DmController } from './controllers/dm/dm.controller';

import { CatMaster } from './entities/cat/catmaster.entity';
import { CatDetail } from './entities/cat/catdetail.entity';
import { CatService } from './services/cat/cat.service';
import { CatController } from './controllers/cat/cat.controller';

import { Party } from './entities/party/party.entity';
import { PartyService } from './services/party/party.service';
import { PartyController } from './controllers/party/party.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      // name:'default',
      // type: 'mssql',
      // host: '192.168.99.1',
      // port: 1433,
      // username: 'TPEmr',
      // password: 'taskprosaas',
      // database: 'TPCatalog',
      // entities: [__dirname + '/**/*.entity{.ts,.js}'],
      // synchronize: false,
      // logging: false,
      // requestTimeout:150000,

      name:'default',
      type: 'mssql',
      host: process.env.MSSQL_HOST,
      port: 1433,
      username: process.env.MSSQL_USER,
      password: process.env.MSSQL_PASS,
      database: process.env.MSSQL_DB,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: false,
      logging: false,
      requestTimeout:150000,
      "options": {
        "encrypt": false,
        "enableArithAbort": true
        },
    }),
    TypeOrmModule.forFeature([
        CatMaster,
        CatDetail,
        Party
    ],'default')
  ],
  controllers: [AppController, DmController, CatController, PartyController],
  providers: [AppService, DmService, CatService, PartyService],
})
export class AppModule { } 