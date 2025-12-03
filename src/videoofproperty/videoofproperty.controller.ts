import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { VideoOfPropertyService } from './videoofproperty.service';
import { VideoOfPropertyDto } from './dto/create-videoofproperty.dto';
import { UpdateVideoOfPropertyDto } from './dto/update-videoofproperty.dto';


@Controller('videoofproperty')
export class VideoofpropertyController {
  constructor(private readonly videoofpropertyService: VideoOfPropertyService) {}

  @Post()
  create(@Body() createVideoofpropertyDto: VideoOfPropertyDto) {
    return this.videoofpropertyService.create(createVideoofpropertyDto);
  }

  @Get()
  findAll() {
    return this.videoofpropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.videoofpropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVideoofpropertyDto: UpdateVideoOfPropertyDto) {
    return this.videoofpropertyService.update(+id, updateVideoofpropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.videoofpropertyService.remove(+id);
  }
}
