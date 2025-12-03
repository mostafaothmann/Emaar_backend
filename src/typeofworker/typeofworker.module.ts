import { Module } from '@nestjs/common';
import { TypeofworkerController } from './typeofworker.controller';
import { TypeOfWorkerService } from './typeofworker.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfWorker } from './entities/typeofworker.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfWorker])],  // 👈 this is required
  controllers: [TypeofworkerController],
  providers: [TypeOfWorkerService],
})
export class TypeofworkerModule {}
