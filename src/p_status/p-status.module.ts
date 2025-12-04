// p-status.module.ts
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PStatusController } from './p-status.controller';
import { PStatus } from './entities/p-status.entity';
import { PStatusService } from './p-status.service';

@Module({
  imports: [TypeOrmModule.forFeature([PStatus])],
  providers: [PStatusService],
  controllers: [PStatusController],
})
export class PStatusModule {}
