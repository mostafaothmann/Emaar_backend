import { Module } from '@nestjs/common';
import { VideoofpropertyController } from './videoofproperty.controller';
import { VideoOfPropertyService } from './videoofproperty.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { VideoOfProperty } from './entities/videoofproperty.entity';

@Module({
  imports: [TypeOrmModule.forFeature([VideoOfProperty])],
  controllers: [VideoofpropertyController],
  providers: [VideoOfPropertyService],
})
export class VideoofpropertyModule {}
