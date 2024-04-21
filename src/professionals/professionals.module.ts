import { Module } from '@nestjs/common';
import { ProfessionalsService } from './professionals.service';
import { ProfessionalsController } from './professionals.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Professional } from './entities/professional.entity';
import { Service } from './entities/service.entity';
import { Speciality } from './entities/speciality.entity';
import { Question } from '../client_professional_entities/entities/question.entitiy';
import { Review } from '../client_professional_entities/entities/review.entity';
import { Language } from '../general_resources/entities/language.entity';
import { City } from '../general_resources/entities/city.entity';
import { ServiceService } from './service.service';
import { SpecialityService } from './speciality.service';

@Module({
  controllers: [ProfessionalsController],
  providers: [ProfessionalsService, ServiceService, SpecialityService],
  imports: [
    TypeOrmModule.forFeature([Professional]),
    TypeOrmModule.forFeature([Service]), 
    TypeOrmModule.forFeature([Speciality]),
    TypeOrmModule.forFeature([Question]),
    TypeOrmModule.forFeature([Review]),
    TypeOrmModule.forFeature([Language]),
    TypeOrmModule.forFeature([City])
  ], 
  exports: [ProfessionalsModule]
})
export class ProfessionalsModule {}
