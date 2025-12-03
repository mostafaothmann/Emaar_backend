import { Module } from '@nestjs/common';
import { TypeOfOwneringService } from './typeofownering.service';
import { TypeofwneringController } from './typeofownering.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfOwnering } from './entities/typeofownering.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfOwnering])],  // 👈 this is required
  controllers: [TypeofwneringController],
  providers: [TypeOfOwneringService],
})
export class TypeofOwneringModule {}
