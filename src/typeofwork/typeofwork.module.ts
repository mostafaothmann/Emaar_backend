import { Module } from '@nestjs/common';
import { TypeOfWorkController } from './typeofwork.controller';
import { TypeOfWorkService } from './typeofwork.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfWork } from './entities/typeofwork.entity';



@Module({
  imports: [TypeOrmModule.forFeature([TypeOfWork])],  // 👈 this is required
  controllers: [TypeOfWorkController],
  providers: [TypeOfWorkService],
})
export class TypeofworkModule {}
