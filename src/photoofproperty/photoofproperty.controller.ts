import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UpdatePhotoofpropertyDto } from './dto/update-photoofproperty.dto';
import { PhotoOfPropertyService } from './photoofproperty.service';
import { PhotoOfPropertyDto } from './dto/create-photoofproperty.dto';

@Controller('photoofproperty')
export class PhotoofpropertyController {
  constructor(private readonly photoofpropertyService: PhotoOfPropertyService) {}

  @Post()
  create(@Body() createPhotoofpropertyDto: PhotoOfPropertyDto) {
    return this.photoofpropertyService.create(createPhotoofpropertyDto);
  }

  @Get()
  findAll() {
    return this.photoofpropertyService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.photoofpropertyService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePhotoofpropertyDto: UpdatePhotoofpropertyDto) {
    return this.photoofpropertyService.update(+id, updatePhotoofpropertyDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.photoofpropertyService.remove(+id);
  }
}
