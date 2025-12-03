import { Module } from '@nestjs/common';
import { TypeofpropertyController } from './typeofproperty.controller';
import { TypeOfPropertyService } from './typeofproperty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeOfProperty } from './entities/typeofproperty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([TypeOfProperty])],  // 👈 this is required
  controllers: [TypeofpropertyController],
  providers: [TypeOfPropertyService],
})
export class TypeofpropertyModule {}
