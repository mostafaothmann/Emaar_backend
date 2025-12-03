import { Module } from '@nestjs/common';
import { UnderGovernorateService } from './under-governorate.service';
import { UnderGovernorateController } from './under-governorate.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UnderGovernorate } from './entities/under-governorate.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UnderGovernorate])],  // 👈 this is required
  controllers: [UnderGovernorateController],
  providers: [UnderGovernorateService],
})
export class UnderGovernorateModule { }
